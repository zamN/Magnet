# Starting Up
-docker-machine ls
-docker-machine start default
-docker-machine env default
-eval $(docker-machine env default)
-docker-compose up

# Compose
docker-compose up
docker kill
docker rm

# images
-list: docker images
-force removal: docker rmi -f image_id
-create: docker build -t name_of_img .
-delete all: docker rmi $(docker images -q)

# Container
-list: docker ps
-stop: docker stop container_id

-attach to one: docker attach 665b4a1e17b6 #by ID

-get into bash: docker exec -i -t 665b4a1e17b6 /bin/bash #by ID
-get out of bash: -ctrl + d

-delete all: docker rm $(docker ps -a -q)
-delete one: docker rm -f container_id

# Errors:
  -docker No such image: sha256:
      -docker-compose rm then docker-compose up
