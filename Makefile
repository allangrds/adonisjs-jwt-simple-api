up: down kill up

down:
	@docker-compose down

kill:
	@docker-compose kill

up:
	@docker-compose up

bash:
	@docker exec -it sandbox-app /bin/ash
