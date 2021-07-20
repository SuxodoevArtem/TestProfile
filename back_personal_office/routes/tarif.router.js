const router = require('express-promise-router')();
const { tarif } = require('../controllers/index');

router.route('/tarif/getTarifs').get(tarif.getTarifs);
router.route('/tarif/getUserTarif').get(tarif.getUserTarif);

module.exports = router;