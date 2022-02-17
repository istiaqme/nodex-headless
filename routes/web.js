const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hi From Web");
});

module.exports = router;