use std::net::SocketAddr;

use axum::{routing::get, Router};
use axum_extra::routing::SpaRouter;

#[tokio::main]
async fn main() {
    // initialize tracing
    tracing_subscriber::fmt::init();
    let index = SpaRouter::new("/", "web/dist").index_file("index.html");
    let app: Router = Router::new().merge(index).route("/upload", get(upload));
    // run our app with hyper
    // `axum::Server` is a re-export of `hyper::Server`
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    tracing::debug!("listening on http://{}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn upload() {}
