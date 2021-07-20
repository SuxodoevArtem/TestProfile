const router = require('express-promise-router')();
const { auth } = require('../controllers/index');

router.route('/auth/login').post(auth.login);

module.exports = router;