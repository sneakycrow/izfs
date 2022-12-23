clean:
	rm -rf target/
	rm -rf node_modules/
	rm -rf web/dist

install:
	npm i

build:
	npm run build
	cargo build