const Handler = lulu.use('app/errors/Handler');
const UserService = lulu.use('app/services/UserService');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {
    register : async function (req, res) {
        try{
            const newUser = await UserService.create(req.body);
            return response.dispatch("User Created Successfully", {newUser}, res, 201); // wrap data in object to avoid confusion
        }
        catch(error){
            return response.error(Handler(error), res);
        }
    },
    list : async function (req, res) {
        try{
            const users = await UserService.list();
            Event.emit('emitted/from/an/http/controller', response.build('User List Loaded', {users}, 200), {});
            return response.dispatch("Users Fetched Successfully", {users}, res, 200); // wrap data in object to avoid confusion
        }
        catch(error){
            console.log(error);
            return response.error(Handler(error), res);
        }
    },
    details : async function (req, res) {
        try{
            const user = await UserService.details(req.params.id);
            return response.dispatch("User Fetched Successfully", {user}, res, 200); // wrap data in object to avoid confusion
        }
        catch(error){
            return response.error(Handler(error), res);
        }
    }
}