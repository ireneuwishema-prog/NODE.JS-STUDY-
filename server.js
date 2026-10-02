// ?the way of importing express.js 
// import { listen } from "express/lib/application";

// ?nodemon property

// nodemon help use to get data on browser without restarting server
//? send()
// send() sends a response from the server to the client.
//? listen()
// ?.listen() starts the server and tells it to listen for incoming requests on a particular port.


// ?express() it is like the function 

// ?router basically a path/URL  what the server should do when someone requests that path.
import express from "express";

const app = express();

// ?CRUD

const students =[
    {
        firstName : 'Irene',
        secondName : 'Uwishema',
        age : 299,
    },
       {
        firstName : 'Alliance',
        secondName : 'Uwera',
        age : 39,
    },
       {
        firstName : 'Emmy',
        secondName : 'Niyonsaba',
        age : 50,
    },
       {
        firstName : 'Presley',
        secondName : 'Mukunzi',
        age : 40,
    },
       {
        firstName : 'Kizito',
        secondName : 'Umugwaneza',
        age : 10,
    }
]
app.get('/',function(request,response){
    response.json({

        //? JSON is the object JSON = data formatted so it can easily be exchanged between systems.

        message: "Hello from server now node is becoming better bro it is easly to study",
       data: students,
    });
})
app.post('/',function(request,response){
     response.send('hellllllllllllllllll');
})
app.listen(3000,function(){
    console.log('app is listening on a port ')
})

