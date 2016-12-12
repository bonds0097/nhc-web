SHELL=/bin/bash

local: docker

docker:
	docker build -t nhc-web .
	docker run nhc-web