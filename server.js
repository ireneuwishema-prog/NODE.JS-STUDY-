// the way of importing express.js 
import express from "express";
import { listen } from "express/lib/application";
const app = express();
// express() it is like the function 

// router basically a path/URL  what the server should do when someone requests that path.
app.get('/',function(request,response){
    response.send('Hello from server now node is becoming better bro it is easly to study')
})
app.listen(3000,function(){
    console.log('app is listening on a port ')
})
// nodemon property

// nodemon help use to get data on browser without restarting server
// send()
// send() sends a response from the server to the client.
// listen()
// .listen() starts the server and tells it to listen for incoming requests on a particular port.