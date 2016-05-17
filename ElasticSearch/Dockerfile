# This image will be based on the official Node.js Docker image.
FROM node:4.2.2

# Set the directory that commands will run in.
WORKDIR /home/Backend

# Put all our code inside that directory that lives in the container.
ADD . /home/Backend

# Install dependencies.
RUN \
  npm install

EXPOSE 5020

# The command to run our app when the container is run.
CMD ["npm", "start"]
