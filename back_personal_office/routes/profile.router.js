const router = require('express-promise-router')();
const { profile } = require('../controllers/index');

router.route('/profile/getProfile').get(profile.getProfile);
router.route('/profile/selectTarif').put(profile.selectTarif);

module.exports = router;