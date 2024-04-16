FROM arm64v8/mongo:latest
LABEL Name=ateliermongodbenmodereplicaset Version=0.0.1
RUN apt-get -y update && apt-get install -y mongodb
RUN apt-get -y update && apt-get install -y mongodb-clients
#RUN apt-get -y update && apt-get install -y mongodb-server
CMD ["sh", "-c", "/usr/games/fortune -a | cowsay"]