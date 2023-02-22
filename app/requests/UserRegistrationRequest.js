const { UserRegistrationRequestSchema } = require('./JoiValidationSchemas');
const Handler = require('../errors/Handler');

module.exports = async function (req, res, next) {
    try {
        await UserRegistrationRequestSchema.validateAsync(req.body, { allowUnknown: true}); // { abortEarly: true } is default and we want abortEarly to be true
        next();
    }
    catch (error) { 
        Handler(error, res)
    }

}