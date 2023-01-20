use std::io;
use std::net::SocketAddr;

use axum::extract::{DefaultBodyLimit, Multipart};
use axum::{routing::post, Router};
use axum_extra::routing::SpaRouter;
use tower_http::trace::TraceLayer;

const CONTENT_LENGTH_LIMIT: usize = 5 * 1024 * 1024 * 1024;

#[tokio::main]
async fn main() {
    // initialize tracing
    tracing_subscriber::fmt::init();
    let index = SpaRouter::new("/assets", "web/dist/assets").index_file("../index.html");

    let app: Router = Router::new()
        .layer(TraceLayer::new_for_http())
        .merge(index)
        .route("/api/upload", post(upload))
        .layer(DefaultBodyLimit::max(CONTENT_LENGTH_LIMIT));

    // run our app with hyper
    // `axum::Server` is a re-export of `hyper::Server`
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    tracing::debug!("listening on http://{}", addr);
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
