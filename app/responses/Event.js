module.exports = {
    emit: function (eventName, data) {
        if(lulu.context.ws.io){
            lulu.context.ws.io.emit(eventName, data);
        }
    }
}