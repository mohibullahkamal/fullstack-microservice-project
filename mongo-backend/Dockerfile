# FROM node:14
# FROM node:10
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]


# FROM
# WORKDIR
# COPY
# RUN
# COPY
# EXPOSE
# CMD


# FROM
# WORKDIR
# COPY
# RUN
# COPY
# EXPOSE
# CMD