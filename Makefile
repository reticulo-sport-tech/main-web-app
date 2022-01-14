stage-build:
	DOCKER_BUILDKIT=1 docker build --progress=plain -t ghcr.io/reticulo-sport-tech/main-web-app:latest .

stage-push: stage-build
	docker push ghcr.io/reticulo-sport-tech/main-web-app:latest

stage-run: stage-build
	docker run --rm -p 80:80 -p 443:443 ghcr.io/reticulo-sport-tech/main-web-app