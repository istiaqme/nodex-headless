const Handler = require('../errors/Handler');
const UserService = require('../services/UserService');
const response = require('../responses/response');
module.exports = {
    register : async function (req, res) {
        try{
            const newUser = await UserService.create(req.body);
            response.dispatch("User Created Successfully", {newUser}, res, 201); // wrap data in object to avoid confusion
        }
        catch(error){
            Handler(error, res);
        }
    },
    list : async function (req, res) {
        try{
            const users = await UserService.list();
            response.dispatch("Users Fetched Successfully", {users}, res, 200); // wrap data in object to avoid confusion
        }
        catch(error){
            Handler(error, res);
        }
    },
    details : async function (req, res) {
        try{
            const user = await UserService.details(req.params.id);
            response.dispatch("User Fetched Successfully", {user}, res, 200); // wrap data in object to avoid confusion
        }
        catch(error){
            Handler(error, res);
        }
    }
}