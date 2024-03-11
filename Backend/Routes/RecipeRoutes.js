const express=require('express')
const router=express.Router();

router.get('/recipe',(req,res)=>{
    res.send("sare recipe khulenga ")
})

router.get('/recipe/:id',(req,res)=>{
    const {id} = req.params;
    res.send(`particular recipe jiske id ${id} hai`);
})


module.exports= router;
