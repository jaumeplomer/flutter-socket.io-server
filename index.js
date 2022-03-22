const express = require('express');
const path = require('path');
require('dotenv').config();

//App de express
const app = express();

// Node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');



const publiPath = path.resolve(__dirname, 'public' );
app.use(express.static( publiPath ));


server.listen(process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor iniciat. Al port: ', process.env.PORT );

});