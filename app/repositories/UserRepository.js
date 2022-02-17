const User = require('../model/User');
const md5 = require('md5');

module.exports = {
    create : async function (data) {
        let newUser = new User({
            name : data.name,
            email : data.email,
            password : md5(data.password),
            phone : data.phone
        })
        return await newUser.save();
    }
}