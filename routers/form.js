const express = require('express')
const router = express.Router()

const Form = require('../models/form')

router.get('/',async(req,res)=>{
    try{
       const forms = await Form.find()
       res.json(forms)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
       const form = await Form.findById(req.params.id)
       res.json(form)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/',async(req,res)=>{

    const form = new Form({
        name: req.body.name,
        language:req.body.language,
        age:req.body.age,
        stte:req.body.stte,
        city:req.body.city,
        email:req.body.email,
        password:req.body.password,
        married:req.body.married
    })

    try{  
      const fr = await form.save()
      res.json(fr)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=>{

    try{  
        const form = await Form.findById(req.params.id)
        form.name= req.body.name
        form.language=req.body.language
        form.age=req.body.age
        form.stte=req.body.stte
        form.city=req.body.city
        form.email=req.body.email
        form.password=req.body.password
        form.married=req.body.married
      const fr = await form.save()
      res.json(fr)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
       const form = await Form.findById(req.params.id)
       const fr = await form.remove()
       res.json(fr)
    }catch(err){
        res.send('Error')
    }
})




module.exports = router