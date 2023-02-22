const config = require('../../app.config');
const MaintenanceModeError = require('../errors/MaintenanceModeError');
const Handler = require('../errors/Handler');
module.exports = async function (req, res, next) {
    try {
        if(config.maintenance.ongoing){
            throw new MaintenanceModeError('System is in maintenance', config.maintenance.deadline, config.maintenance.note)
        }
        next();
    }
    catch (error) { 
        Handler(error, res)
    }

}