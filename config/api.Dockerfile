FROM lukemathwalker/cargo-chef:latest-rust-1 AS chef
RUN update-ca-certificates
WORKDIR /izfs

FROM chef AS planner
COPY .. .
RUN cargo chef prepare --recipe-path recipe.json

FROM chef AS builder
COPY --from=planner /izfs/recipe.json recipe.json
# Build dependencies - this is the caching Docker layer!
RUN cargo chef cook --release --recipe-path recipe.json
# Build application
COPY . .
RUN cargo build --release --bin izfs-api

FROM debian:bullseye-slim as runtime
RUN apt update && apt install -y curl openssl

WORKDIR /izfs

COPY --from=builder /izfs/target/release/izfs-api ./

EXPOSE 3000
ENV PORT=3000
CMD ["/izfs/izfs-api"]