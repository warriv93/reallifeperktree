FROM node:12.16.3
LABEL authors="warriv93"

WORKDIR /app

# makes it possbile to cache the isntallation process
ADD package.json yarn.lock /app/
# Download application dependencies
RUN yarn install

# Install pm2 to manage the node process
# RUN npm install pm2@2 -g

# copy all our source code into the working directory
COPY . .

# Expose application port
EXPOSE 1337

# start node.js application with pm2
# CMD ["pm2", "start", "processes.json", "--no-daemon"]

CMD ["yarn","start"]






# Create the image -> docker build -t warriv93/api-reallifeperktree .

# TO RUN -> docker run --publish 1337:1337 --detach --name api-rlpt warriv93/api-reallifeperktree

# Stop -> docker stop rlpt
# Delete -> docker rm --force rlpt

# List all images available on the Docker host -> docker images

# To push docker.hub -> docker push warriv93/api-reallifeperktree



# _________
# https://docs.docker.com/get-started/part2/
# _________
# The rm --force option removes the running container. 
# _________
# run --publish asks Docker to forward traffic incoming on the host’s port 8000, to the container’s port 8080. Containers have their own private set of ports, so if you want to reach one from the network, you have to forward traffic to it in this way. Otherwise, firewall rules will prevent all network traffic from reaching your container, as a default security posture.
# run --detach asks Docker to run this container in the background.
# run --name specifies a name with which you can refer to your container in subsequent commands, in this case bb.