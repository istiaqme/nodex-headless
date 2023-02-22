const config = require('../../app.config')
const buildMessage = (error) => {
    return config.app.debug ? error.message : 'Internal Server Error'
}
const buildData = (error) => {
    if(config.app.debug){
        if(error.details){
            return {
                stack: error.stack,
                original: error._original,
                details: error.details
            }
        }
        return {
            stack: error.stack
        }
    }
    return {}
}



module.exports = {
    buildMessage,
    buildData
}