SHELL=/bin/bash

local: docker

docker:
	docker build -t nhc-web .
	docker run nhc-web -p 8080:98080