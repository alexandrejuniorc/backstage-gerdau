# Docker section

## Docker Compose configuration for dev environment, used for the development process
docker/dev/start:
	@docker compose -f docker-compose.dev.yaml up -d

docker/dev/restart:
	@docker compose down
	@docker system prune -a
	@docker compose -f docker-compose.dev.yaml up -d

## Docker Compose configuration for prd environment, used for the deploy process

docker/start:
	rm -rf **/dist
	rm -rf dist-types
	yarn install
	yarn tsc
	yarn build:backend --config ../../app-config.yaml
	yarn build-image
	@docker compose up -d

docker/restart:
	@docker system prune -a
	rm -rf **/dist
	rm -rf dist-types
	yarn install
	yarn tsc
	yarn build:backend --config ../../app-config.yaml
	yarn build-image
	@docker compose up -d

docker/stop:
	@docker stop $(shell docker ps -q)
