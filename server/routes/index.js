const router = require('express').Router();

router.use('/', require('./users'));
router.use('/', require('./questions'));

module.exports = router;