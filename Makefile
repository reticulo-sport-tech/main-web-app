build:
	yarn export

deploy: build
	wrangler pages deploy out --project-name main-web-app

prod-build:
	DOCKER_BUILDKIT=1 docker build -t reticuloprod.azurecr.io/main-web-app:latest .

prod-push: prod-build
	docker push reticuloprod.azurecr.io/main-web-app:latest

prod-run: prod-build
	docker run --rm -p 80:80 reticuloprod.azurecr.io/main-web-app

# prod-build:
# 	az acr build --file Dockerfile --registry reticuloprod --image main-web-app .

# prod-logs:
# 	az webapp log tail --name main-web-app  --resource-group  reticulo-prod