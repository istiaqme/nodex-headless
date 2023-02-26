const express = require('express');
const router = express.Router();
/* Controllers */
const UserController = lulu.use('app/controllers/HTTP/UserController');
/* Controllers */
/* Request Validator Middlewares */
const UserRegistrationRequest = lulu.use('app/requests/UserRegistrationRequest');
/* Request Validator Middlewares */

router.get('/', (req, res) => {
    res.send("Hi From API");
});

router.post('/user/register', [
    UserRegistrationRequest
],  UserController.register);

router.get('/user/list', [],  UserController.list);
router.get('/user/details/:id', [],  UserController.details);


module.exports = router;