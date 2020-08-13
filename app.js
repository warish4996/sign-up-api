const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://formuser:formuser@cluster0.5wxkc.mongodb.net/<dbname>?retryWrites=true&w=majority'

const app = express()

const  connectDb = async ()=>{
    await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})
    console.log('connected..')
}

connectDb();



app.use(express.json())

const formRouter= require('./routers/form')
app.use('/form',formRouter)

const port = parseInt(process.env.PORT, 10) || 9000;

app.listen(port,()=>{
    console.log('server started')
})