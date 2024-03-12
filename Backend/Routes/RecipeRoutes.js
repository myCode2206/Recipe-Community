const express=require('express')
const router=express.Router();
const MyRecipe = require('../Models/recipe')

router.get('/recipe',async(req,res)=>{
    try{
    const recipe= await MyRecipe.find();
    console.log("sare recipes aa jynge");
    res.status(200).json(recipe);
    }
    catch (e) {
        res.status(400).json({ msg: 'Something Went Wrong!!!' });
    }
})

router.post('/recipe/add', async(req,res)=>{
    try{
        const {title , image, CookingTime, Calories, Ingredients, Instruction}=req.body;
        const author="mukul";
        const usermail="mukul";
        await MyRecipe.create({title,image,CookingTime,Calories,Ingredients, Instruction,author,usermail});
    }
    catch (e) {
        res.status(400).json({ msg: 'Something Went Wrong!!!' });
    }
    
})

router.get('/recipe/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const recipe= await MyRecipe.findById(id)
        console.log("sare recipes aa jynge");
        res.status(200).json(recipe);
    }
    catch(e){
        res.status(400).json({ msg: 'Something Went Wrong!!!' });
    }

    
})

router.get('/recipe/:id/updaterecipe', async(req,res)=>{
    try{
        const {id} = req.params;
        const recipe= await MyRecipe.findById(id);
        console.log("sare recipes aa jynge");
        res.status(200).json(recipe);
    }
    catch(e){
        res.status(400).json({msg:'somthing went wrong'});
    }
    
})
router.post('/recipe/:id/updaterecipe',(req,res)=>{
    try{
        const {id} = req.params;
        const {title , image, CookingTime, Calories, Ingredients, Instruction}=req.body;
        const recipe=MyRecipe.findByIdAndUpdate(id,{title,image,CookingTime,Calories,Ingredients, Instruction});
        console.log("sare recipes aa jynge");
        res.status(200).json(recipe);
    }
    catch(e){
        res.status(400).json({msg:'somthing went wrong'});
    }
})




module.exports= router;
