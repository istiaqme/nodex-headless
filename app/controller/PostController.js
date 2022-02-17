const PostRepository = require('../repositories/PostRespository');
const res200 = require('../helpers/formatters/res200');

async function postList (req, res) {
    res200(
        "List Loaded", 
        await PostRepository.postList(), 
        res
    );
}

async function createPost (req, res) {
    res200(
        "New Post Created", 
        await PostRepository.create(req.body), 
        res
    );
}







module.exports = {
    postList,
    createPost
}