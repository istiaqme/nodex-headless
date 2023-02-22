module.exports = class JoiValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "JoiValidationError";
    }
}