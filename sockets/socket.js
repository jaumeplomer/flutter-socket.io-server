const  {io} = require('../index');


//Mensajes de sockets
io.on('connection', client => {
    console.log('Client conectat');


    client.on('disconnect', () => {
      console.log('Client Desconectat');
    });

    client.on('mensaje', (payload ) => {
        console.log('Missatgeeee!!', payload);

        io.emit( 'mensaje', {admin: "Nou missatge"} );

    });


});