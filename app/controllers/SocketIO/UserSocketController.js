const Handler = lulu.use('app/errors/Handler');
const UserService = lulu.use('app/services/UserService');
const response = lulu.use('app/responses/Response');
module.exports = {
    list : async function (ws) {
        try{
            const users = await UserService.list();
            return ws.io.emit(ws.event, response.build('User List Loaded', {users}, 200)); // wrap data in object to avoid confusion
        }
        catch(error){
            return ws.io.emit(ws.event, Handler(error));
        }
    },
    privateProfileDetails : async function (ws) {
        try{
            const user = await UserService.details(ws.payload.privateId);
            return ws.io.emit(ws.event, response.build('Private User Details Loaded.', {user}, 200)); // wrap data in object to avoid confusion
        }
        catch(error){
            return ws.io.emit(ws.event, Handler(error));
        }
    }
}