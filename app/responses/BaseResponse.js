module.exports = class BaseResponse{
    constructor(){
        this.kind = 'Error';
        this.message = '';
        this.data = null;
        this.brCode = null;
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
    setCode(brCode){
        this.brCode = brCode;
        return this;
    }

    getResponse(){
        return {
            code : this.brCode,
            kind : this.kind,
            message : this.message,
            data : this.data
        }
    }

    

}