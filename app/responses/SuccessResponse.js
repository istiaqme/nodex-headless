const BaseResponse = require('./BaseResponse');
module.exports = class SuccessResponse extends BaseResponse{
    constructor(){
        super();
        this.kind = 'Success';
    }

}