module.exports = class NotFoundError extends Error {
    constructor(message){
        super(message);
        this.name = "NotFoundError";
    }
}