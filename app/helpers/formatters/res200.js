module.exports = function (msg, data, res){
    res.status(200).json({
        type : 'success',
        msg : msg,
        data : data
    })
}