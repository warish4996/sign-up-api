const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/formData'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection

con.on('open',()=>{
    console.log('connected...')
})

app.use(express.json())

const formRouter= require('./routers/form')
app.use('/form',formRouter)

const port = parseInt(process.env.PORT, 10) || 9000;

app.listen(port,()=>{
    console.log('server started')
})