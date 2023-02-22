const response = require('../responses/response');
const {buildMessage, buildData} = require('./ErrorHelper');
module.exports = function (error, res) {
    if(error instanceof require('./NotFoundError')){
        response.dispatch(error.message, {}, res, 404);
    }
    else if(error instanceof require('./ValidationError')){
        response.dispatch(error.message, {}, res, 400);
    }
    else if(error instanceof require('./ResourceAlreadyExistsError')){
        response.dispatch(error.message, {}, res, 403);
    }
    else if(error instanceof ReferenceError){
        response.dispatch(buildMessage(error), buildData(error), res, 500);
    }
    else if(error instanceof TypeError){
        response.dispatch(buildMessage(error), buildData(error), res, 500);
    }
    else if(error instanceof ValidationError){
        response.dispatch(buildMessage(error), buildData(error), res, 400);
    }
    else if(error instanceof require('./JoiValidationError')){
        response.dispatch(buildMessage(error), buildData(error), res, 400);
    }
    else if(error instanceof require('./MaintenanceModeError')){
        response.dispatch(error.message, {
            deadline: error.deadline,
            note: error.note
        }, res, 503);
    }
    else {
        response.dispatch(buildMessage(error), buildData(error), res, 500);
    }
}