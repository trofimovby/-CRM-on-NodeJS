const express = require('express')
const controller = require('../controllers/analytics')
const router = express.Router() // создаем роутер
// localhost:5211/api/auth/login


router.get ('/overview', controller.overview)
router.get ('/analytics', controller.analytics)

module.exports = router // экспортируем его

