module.exports = function (error, res) {
    if(error instanceof require('./NotFoundError')){
        res.status(404).json({
            type : 'error',
            msg : error.message,
            data : {}
        })
    }
    else if(error instanceof require('./ValidationError')){
        res.status(400).json({
            type : 'error',
            msg : error.message,
            data : {}
        })
    }
    else if(error instanceof ReferenceError){
        res.status(500).json({
            type : 'error',
            msg : "Server Problem",
            data : {}
        })
    }
    else if(error instanceof TypeError){
        res.status(500).json({
            type : 'error',
            msg : "Server Problem",
            data : {}
        })
    }
    else {
        res.status(500).json({
            type : 'error',
            msg : "Server Busy",
            data : {}
        })
    }



}