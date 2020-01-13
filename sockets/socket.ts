import { Socket } from 'socket.io';
import socketIO from 'socket.io';


export const desconectar = (cliente: Socket) => {

    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

}

// ESCUCHAR MENSAJES

export const mensaje = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('mensaje', (payload: {de: string, cuerpo: string}) => {

        console.log('Mensaje recibido', payload);
        io.emit('mensajeNuevo', payload);

    });

}