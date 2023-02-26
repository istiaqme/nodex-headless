const config = lulu.use('app.config');
const MaintenanceModeError = lulu.use('app/errors/MaintenanceModeError');
const Handler = lulu.use('app/errors/Handler');
const response = lulu.use('app/responses/Response');
module.exports = async function (req, res, next) {
    try {
        if(config.maintenance.ongoing){
            throw new MaintenanceModeError('System is in maintenance.', config.maintenance.deadline, config.maintenance.note)
        }
        next();
    }
    catch (error) { 
        return response.error(Handler(error), res);
    }

}