# Docker section

## Docker Compose configuration for production environment, used for the production process
docker/prd/start:
	rm -rf **/dist
	rm -rf dist-types
	direnv allow
	yarn install
	yarn tsc
	yarn build:backend --config ../../app-config.yaml
	yarn build-image
	@docker compose up -d
docker/prd/stop:
	@docker compose down
docker/prd/reset:
	@docker compose down --volumes --remove-orphans
	@docker compose up -d
	
	
## Docker Compose configuration for dev environment, used for the development process
docker/dev/start:
	rm -rf **/dist
	rm -rf dist-types
	direnv allow
	@docker compose -f docker-compose.dev.yaml up -d
docker/dev/stop:
	@docker compose -f docker-compose.dev.yaml stop
docker/dev/reset:
	@docker compose -f docker-compose.dev.yaml down --volumes --remove-orphans
	@docker compose -f docker-compose.dev.yaml up -d
