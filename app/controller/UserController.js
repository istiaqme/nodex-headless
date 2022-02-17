const res200 = require('../helpers/formatters/res200');
const UserRepository = require('../repositories/UserRepository');
const Handler = require('../helpers/errors/Handler');

module.exports = {
    register : async function (req, res) {
        try {
            res200(
                "A New User Is Created",
                await UserRepository.create(req.body),
                res
            );
        }
        catch(error){
            console.log(error)
            Handler(error, res);
        }
    }
}