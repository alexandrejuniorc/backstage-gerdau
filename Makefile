# Build docker image
docker-build-image:
	yarn install
	yarn tsc
	yarn build:backend --config ../../app-config.yaml
	yarn build-image
	@docker compose up -d
	