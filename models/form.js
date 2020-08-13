const mongoose =require('mongoose')

const formSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    stte:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
        },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    married:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports = mongoose.model('Form',formSchema)