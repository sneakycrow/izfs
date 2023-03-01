FROM debian:bullseye-slim as runtime
RUN apt update && apt install -y curl openssl

WORKDIR /izfs

COPY ./izfs-api .

EXPOSE 8000
ENV PORT=8000
CMD ["/izfs/izfs-api"]