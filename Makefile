dev:
	yarn dev

build:
	yarn build

deploy:
	firebase deploy

run:
	docker run --rm -v ./nginx.conf:/etc/nginx/nginx.conf:ro -v ./out:/usr/share/nginx/html -p 80:80 nginx:alpine

deploy-v2:
	firebase hosting:channel:deploy v2

deploy-v3:
	firebase hosting:channel:deploy v3
