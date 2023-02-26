const Handler = lulu.use('app/errors/Handler');
const response = lulu.use('app/responses/Response');
module.exports = async function (req, res, next) {
    try {
        lulu.context.http.req = req;
        lulu.context.http.res = res;
        lulu.context.http.next = next;
        next();
    }
    catch (error) { 
        return response.error(Handler(error), res);
    }

}