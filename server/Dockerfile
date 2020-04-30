FROM node:12.16.3
WORKDIR /app
RUN npm install express --save && npm install 
COPY . .
EXPOSE 1337
CMD ["npm","start"]