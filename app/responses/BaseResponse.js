module.exports = class BaseResponse{
    constructor(){
        this.kind = 'Error';
        this.message = '';
        this.data = null;
        this.code = null;
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
    setCode(code){
        this.code = code;
        return this;
    }

    getResponse(){
        return {
            code : this.code,
            kind : this.kind,
            message : this.message,
            data : this.data
        }
    }

    

}