use std::net::SocketAddr;

use axum::Router;
use axum_extra::routing::SpaRouter;

#[tokio::main]
async fn main() {
    // initialize tracing
    tracing_subscriber::fmt::init();
    let app: Router = Router::new().merge(SpaRouter::new("/", "web/dist").index_file("index.html"));
    // run our app with hyper
    // `axum::Server` is a re-export of `hyper::Server`
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    tracing::debug!("listening on http://{}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
