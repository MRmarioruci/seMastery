# Docker

1. What is Docker
	A platform for building, running and shipping applications.

 
 2. Container
	Isolated enviroment for running our application

3. Pros
	Allow running multiple apps in isolation
	Lightweight containers
	Use OS of the host
	Start quickly
	Need less hardware resources
	
4. Architecture
	Client-Server Rest
	Container is a process
	All containers share the kernel of the OS

docker version

5. Dockerfile
	Plain text file that includes information on how the application should run

docker run container
docker image ls
docker ps -a
// Shell 
docker run -it ubuntu


sudo docker build -t inventory-service .
sudo docker run -p 5000:5000 -d inventory-service