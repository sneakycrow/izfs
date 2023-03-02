use std::net::SocketAddr;

use axum::extract::{DefaultBodyLimit, Multipart};
use axum::{routing::post, Router};
use tower_http::services::ServeDir;
use tower_http::trace::TraceLayer;
use tracing::{info, span, Level};
use tracing_subscriber::EnvFilter;

const CONTENT_LENGTH_LIMIT: usize = 5 * 1024 * 1024 * 1024;
const DEFAULT_PORT: u16 = 3000;

#[tokio::main]
async fn main() {
    // Initialize environment logger for all macros to use
    tracing_subscriber::fmt()
        .with_target(false)
        .compact()
        .with_env_filter(EnvFilter::from_default_env())
        .init();

    span!(Level::DEBUG, "initializing app router");

    // initialize router with tracing and body upload limit
    let app: Router = Router::new()
        .nest_service("/", ServeDir::new("web/dist"))
        .route("/api/upload", post(upload))
        .layer(DefaultBodyLimit::max(CONTENT_LENGTH_LIMIT))
        .layer(TraceLayer::new_for_http());

    // run our app with hyper
    // `axum::Server` is a re-export of `hyper::Server`
    let addr = SocketAddr::from(([127, 0, 0, 1], DEFAULT_PORT));
    info!("listening on http://{}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn upload(mut multipart: Multipart) {
    while let Some(mut _field) = multipart.next_field().await.unwrap() {
        let name = _field.name().unwrap().to_string();
        let data = _field.bytes().await.unwrap();

        println!("Length of `{}` is {} bytes", name, data.len());
    }
}
