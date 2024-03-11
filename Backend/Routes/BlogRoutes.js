const express=require('express')
const router=express.Router();
const MyBlog=require('../Models/blog')

router.get('/blogs',async(req,res)=>{
    try{
    const blog= await MyBlog.find();
    console.log("sare blogs aa jynge");
    res.status(200).json(blog);
    }
    catch (e) {
        res.status(400).json({ msg: 'Something Went Wrong!!!' });
    }
})

router.post('/blog/add', async(req,res)=>{
    try{
        const {title , image, body}=req.body;
        const author="mukul";
        await MyBlog.create({title,image,body,author});
        
    }
    catch (e) {
        res.status(400).json({ msg: 'Something Went Wrong!!!' });
    }
    
})

router.get('/blog/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const blog= await MyBlog.findById(id)
        console.log("sare blogs aa jynge");
        res.status(200).json(blog);
    }
    catch(e){
        res.status(400).json({ msg: 'Something Went Wrong!!!' });
    }

    
})

router.get('/blog/:id/updateblog', async(req,res)=>{
    try{
        const {id} = req.params;
        const blog= await MyBlog.findById(id);
        console.log("sare blogs aa jynge");
        res.status(200).json(blog);
    }
    catch(e){
        res.status(400).json({msg:'somthing went wrong'});
    }
    
})
router.post('/blog/:id/updateblog',(req,res)=>{
    try{
        const {id} = req.params;
        const {title,image,body}=req.body();
        const blog=MyBlog.findByIdAndUpdate(id,{title:title ,image:image , body:body});
        console.log("sare blogs aa jynge");
        res.status(200).json(blog);
    }
    catch(e){
        res.status(400).json({msg:'somthing went wrong'});
    }
})




module.exports= router;
