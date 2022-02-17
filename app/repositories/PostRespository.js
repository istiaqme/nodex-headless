const Post = require('../model/Post');
const PostSetter = require('../helpers/setters/PostSetter');

module.exports = {
    create : async function (data) {
        let newPost = new Post({
            title : data.title,
            details : data.details
        })
        await newPost.save();
        return newPost;
    },

    postList : async function () {
        return PostSetter.newPostList(await Post.find({}));
    },

}