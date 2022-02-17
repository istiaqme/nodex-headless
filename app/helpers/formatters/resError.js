module.exports = function (msg, data, res){
    res.status(500).json({
        type : 'error',
        msg : msg,
        data : data
    })
}