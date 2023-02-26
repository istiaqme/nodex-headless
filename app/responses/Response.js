const SuccessResponse = require('./SuccessResponse');
const ErrorResponse = require('./ErrorResponse');
const response = {
    build: function (message, data, code = 200) {
        let responseObject = null;
        if(code == 200 || code == 201){
            responseObject = new SuccessResponse();
            responseObject.setMessage(message).setData(data).setCode(code);
            return responseObject.getResponse();
        }
        else{
            responseObject = new ErrorResponse();
            responseObject.setMessage(message).setData(data).setCode(code);
            return responseObject.getResponse();
        }
        
    },
    dispatch: function (message, data, res, code = 200) {
        return res.status(code).json(this.build(message, data, res, code));
    },
    error: function (HandlerObject, res){
        return res.status(HandlerObject.code).json(HandlerObject);
    }
};



module.exports = response;