# todo-app
Multiple to-do lists manager created with Vue, Express and MongoDB

# Installation

## Client

1. `npm install` 
2. Inside the config directory, `cp dev.env.template.js dev.env.js` and `cp prod.env.template.js prod.env.js` 
3. Configure the new files with your api endpoint for development and production
4. To run, `npm run dev`

### Client build

To deploy the client you can run `NODE_ENV=production npm run build` and point your server to the dist directory.
If you are serving the app from a sub-directory you should modify the router (router/index.js) and the build configuration (config/index.js) accordingly.

## Server

1. `npm install`
2. `cp .env.template .env` and configure your app base url and mongo url
3. run `npm start`