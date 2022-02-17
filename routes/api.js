const express = require('express');
const router = express.Router();
const PostController = require('../app/controller/PostController');
const UserController = require('../app/controller/UserController');
/* Validator Middlewares */
const UserRegistrationRequest = require('../app/requests/UserRegistrationRequest');

router.get('/', (req, res) => {
    res.send("Hi From API");
});

router.post('/user/register', UserRegistrationRequest,  UserController.register);

router.post('/post/create', PostController.createPost);
router.get('/post/list', PostController.postList);

module.exports = router;