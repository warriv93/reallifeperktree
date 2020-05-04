# Use the official image as a parent image.
FROM node:12.16.3
LABEL authors="warriv93"

ENV APP=/app/
RUN mkdir -p $APP

# Set the working directory.
WORKDIR $APP
ADD package.json yarn.lock $APP

# Run the command inside your image filesystem.
RUN yarn install

#prepare nginx
# FROM nginx:1.16.0-alpine

# COPY $APP /usr/share/nginx/html
# RUN ln -s /app /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/sites-available/default
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose Docker container API port to the outside
# EXPOSE 80
#fire up nginx
# CMD ["nginx","-g","daemon off;"]

# Copy the files from your host to your current location.
COPY . $APP
EXPOSE 3000
# Run the specified command within the container.
# Launch application
CMD [ "yarn", "start" ]





# Create the image -> docker build -t warriv93/reallifeperktree .

# TO RUN -> docker run --publish 3000:80 --detach --name rlpt warriv93/reallifeperktree

# Stop -> docker stop rlpt
# Delete -> docker rm --force rlpt

# List all images available on the Docker host -> docker images

# To push docker.hub -> docker push warriv93/reallifeperktree



# _________
# https://docs.docker.com/get-started/part2/
# _________
# The rm --force option removes the running container. 
# _________
# run --publish asks Docker to forward traffic incoming on the host’s port 8000, to the container’s port 8080. Containers have their own private set of ports, so if you want to reach one from the network, you have to forward traffic to it in this way. Otherwise, firewall rules will prevent all network traffic from reaching your container, as a default security posture.
# run --detach asks Docker to run this container in the background.
# run --name specifies a name with which you can refer to your container in subsequent commands, in this case bb.