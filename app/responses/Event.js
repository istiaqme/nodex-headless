const ValidationError = lulu.use('app/errors/ValidationError');
module.exports = {
    emit: function (eventName, data, config = null) {
        if(lulu.context.ws){
            if(config){
                if(config.broadcast){
                    // to all clients in the current namespace except the sender
                    lulu.context.ws.socket.broadcast.emit(eventName, data);
                }
                else if(config.room){
                    if(config.room.method == 'to'){
                        // to all clients in the given room except the sender
                        lulu.context.ws.io.to(config.room.name).emit(eventName, data);
                    }
                    else if(config.room.method == 'in'){
                        // to all clients in the given room including the sender
                        lulu.context.ws.io.in(config.room.name).emit(eventName, data);
                    }
                    else{
                        throw new Error('Invalid room method. Please use "to" or "in"');
                    }
                }
                else if(config.socketId){
                    // to a specific client
                    lulu.context.ws.io.to(config.socketId).emit(eventName, data);
                }
                else if(config.volatile){
                    // to all clients in the current namespace except the sender
                    lulu.context.ws.socket.volatile.emit(eventName, data);
                }
                else{
                    lulu.context.ws.socket.emit(eventName, data);
                }
            }
            else{
                lulu.context.ws.socket.emit(eventName, data);
            }
        }
    }

    // Currently supports only basic emmiting. Will add support for multiple rooms and namespaces later.
}