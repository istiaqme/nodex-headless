const User = require('../model/User');
const NotFoundError = require('../helpers/errors/NotFoundError');
const ValidationError = require('../helpers/errors/ValidationError');
const Handler = require('../helpers/errors/Handler');
const utils = require('../helpers/utils');

module.exports = async function (req, res, next) {

    try {
        const { name, email, password, phone } = req.body;

        utils.simpleValidate(name);


        if(!req.body.hasOwnProperty('name')) throw new NotFoundError("Name key is required.");

        if(name.length === 0 || email.length === 0 || password.length === 0 || phone.length === 0) throw new ValidationError("All Fields Must Be Filled.");

        if(/^[A-Za-z\s]*$/.test(name) === false) throw new ValidationError("Name Should Have Characters From English Alphabet");

        if(password.length < 8 || password.length > 16) throw new ValidationError("Password Should Have 8 to 16 Characters");

        if(await User.findOne({email : email})) throw new ValidationError("Already In Database.");

        next();
    }
    catch(error){
        console.log(error)
        Handler(error, res);
    }

}