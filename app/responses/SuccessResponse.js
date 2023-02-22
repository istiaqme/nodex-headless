const BaseResponse = require('./BaseResponse');
module.exports = class SuccessResponse extends BaseResponse{
    constructor(){
        super();
        this.kind = 'Success';
    }
    
    getResponse(){
        return {
            kind : this.kind,
            message : this.message,
            data : this.data
        }
    }
}