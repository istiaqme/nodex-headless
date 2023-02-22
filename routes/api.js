const express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController');
/* Request Validator Middlewares */
const UserRegistrationRequest = require('../app/requests/UserRegistrationRequest');

router.get('/', (req, res) => {
    res.send("Hi From API");
});

router.post('/user/register', [
    UserRegistrationRequest
],  UserController.register);

router.get('/user/list', [],  UserController.list);
router.get('/user/details/:id', [],  UserController.details);


module.exports = router;