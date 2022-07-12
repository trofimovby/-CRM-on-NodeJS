const express = require('express')
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const {MongoDB_URI} = require("./config/keys");
const app = express()

console.log(MongoDB_URI)

mongoose.connect(MongoDB_URI)
    .then(() =>  console.log('Connected'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)


app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended : true}))//decode url
app.use(bodyParser.json())
app.use(require('cors')())


app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes )

module.exports = app // экспортируем наружу эту переменную



