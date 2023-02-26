const BaseResponse = require('./BaseResponse');
module.exports = class ErrorResponse extends BaseResponse{
    constructor(){
        super();
        this.kind = 'Error';
    }

    

}