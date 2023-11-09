// import json-server library in index.js
const jsonserver = require('json-server')

//create server using json-server library

const mediaPlayerServer = jsonserver.create()

//create path to db.json file

const router = jsonserver.router('db.json')

//middlewares to convert js to json 

const middleware = jsonserver.defaults()

//connect /user middleware and router in server
 mediaPlayerServer.use(middleware)
 mediaPlayerServer.use(router)

 //setup port for the server 

 const port = 5000 || process.env.PORT

 //to listen server for resolving request
 mediaPlayerServer.listen(port,()=>{
    console.log(`mediaplayerServer started at ${port} and ready fetch request`);
 })
