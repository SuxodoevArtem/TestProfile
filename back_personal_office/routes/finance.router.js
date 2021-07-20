const router = require('express-promise-router')();
const { finance } = require('../controllers/index');

router.route('/finance/getPayments').get(finance.getPayments);
router.route('/finance/getBalance').get(finance.getBalance);
router.route('/finance/UpdateBalance').put(finance.UpdateBalance);

module.exports = router;