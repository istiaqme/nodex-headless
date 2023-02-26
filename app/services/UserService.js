const User = require('../models/mongoose/User');
const { db } = require('../helpers');

async function create (data) {
    let newUser = new User(data);
    return await newUser.save();
}

async function list () {
    return await User.find();
}

async function details (id) {
    if(!db.isValidObjectId(id)){
        return null;
    } // return null if id is not valid ObjectId to avoid error in mongoose.
    console.log(id);
    return await User.findOne({_id: id});
}

module.exports = {
    create,
    list,
    details
}


