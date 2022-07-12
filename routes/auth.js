const express = require('express')
const controller = require('../controllers/auth')

const router = express.Router() // создаем роутер
// localhost:5211/api/auth/login
router.post ('/login', controller.login)
router.post ('/register', controller.register)

module.exports = router // экспортируем его



