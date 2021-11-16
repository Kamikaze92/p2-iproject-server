
const router = require("express").Router();
const routerAuthentication = require('./authentication')


router.use('/authentication', routerAuthentication)

module.exports = router