FROM debian:bullseye-slim as runtime
RUN apt update && apt install -y curl openssl

WORKDIR /fulcrum

COPY ./target/debug/fulcrum-api .

EXPOSE 8000
ENV PORT=8000
CMD ["/fulcrum/fulcrum-api"]