# Build docker image
docker-build-image:
	rm -rf **/dist
  rm -rf dist-types
	yarn install
	yarn tsc
	yarn build:backend --config ../../app-config.yaml
	yarn build-image
	@docker compose up -d
	