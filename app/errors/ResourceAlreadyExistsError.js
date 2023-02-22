module.exports = class ResourceAlreadyExistsError extends Error {
    constructor(message){
        super(message);
        this.name = "ResourceAlreadyExistsError";
    }
}