const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('USERS END POINT')
});

module.exports = router;
