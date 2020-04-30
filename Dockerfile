# Use the official image as a parent image.
FROM node:12.16.3

# Copy the files from your host to your current location.
COPY . /app

# Set the working directory.
WORKDIR /app

# Run the command inside your image filesystem.
# RUN npm install --silent
# RUN npm install
RUN npm build
# Expose Docker container API port to the outside
EXPOSE 80

# Run the specified command within the container.
# Launch application
CMD [ "npm", "start" ]

# Create the image -> docker build -t reallifeperktree .

# List all images available on the Docker host -> docker images

# To push docker.hub -> docker push warriv93/reallifeperktree:tagname

# TO RUN -> docker run --publish 3000:80 --detach --name tlpt reallifeperktree:latest
# Stop -> docker stop tlpt
# Delete -> docker rm --force tlpt


# _________
# https://docs.docker.com/get-started/part2/
# _________
# The rm --force option removes the running container. 
# _________
# run --publish asks Docker to forward traffic incoming on the host’s port 8000, to the container’s port 8080. Containers have their own private set of ports, so if you want to reach one from the network, you have to forward traffic to it in this way. Otherwise, firewall rules will prevent all network traffic from reaching your container, as a default security posture.
# run --detach asks Docker to run this container in the background.
# run --name specifies a name with which you can refer to your container in subsequent commands, in this case bb.