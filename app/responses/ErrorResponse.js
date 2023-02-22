const BaseResponse = require('./BaseResponse');
module.exports = class ErrorResponse extends BaseResponse{
    constructor(){
        super();
        this.kind = 'Error';
    }

    getResponse(){
        return {
            kind : this.kind,
            message : this.message,
            data : this.data
        }
    }

}