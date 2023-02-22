module.exports = class BaseResponse{
    constructor(){
        this.kind = 'Error';
        this.message = '';
        this.data = null;
    }

    setKind(kind){
        this.kind = kind;
        return this;
    }
    setMessage(message){
        this.message = message;
        return this;
    }
    setData(data){
        this.data = {...data};
        return this;
    }

    

}