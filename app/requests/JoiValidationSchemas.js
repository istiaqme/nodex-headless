const Joi = require('joi');
const JoiValidationError = require('../errors/JoiValidationError');

const UserRegistrationRequestSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().error(() => new JoiValidationError('Name must be between 3 and 30 characters.', 'name')),
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    /* password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password')    */     
});

module.exports = {
    UserRegistrationRequestSchema
};

/* It's better use your own validation error with custom error message. Handler works fine. */