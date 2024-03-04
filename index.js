const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/user_management_system')

const express = require('express')
const nocache = require('nocache');

const app = express()
app.use(nocache());

//for user Routes
const userRoute = require('./routes/userRoute')
app.use('/',userRoute)


//for admin Routes
const adminRoute = require('./routes/adminRoute')
app.use('/admin',adminRoute)

app.listen(3006,() => {
    console.log('server is running...http://localhost:3006/login');
})