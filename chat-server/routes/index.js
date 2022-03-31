const router = require('express').Router();
const apiRoutes = require('./api/');
const frontEndRoute = require('./frontEnd.js');


// router.use('/api', apiRoutes);
router.use('*', apiRoutes);

module.exports = router;