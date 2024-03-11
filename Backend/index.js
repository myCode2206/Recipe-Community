const express=require('express');
const app=express();
const mongoose=require('mongoose');
app.use(express.urlencoded({ extended: false }));


mongoose.connect("locolhost:")



//all routes
const BlogRoutes=require('./Routes/BlogRoutes');
const NormalRoutes=require('./Routes/NormalRoutes');
const RecipeRoutes=require('./Routes/RecipeRoutes');
const UserRoutes=require('./Routes/UserRoutes');
app.use(BlogRoutes);
app.use(NormalRoutes);
app.use(RecipeRoutes);
app.use(UserRoutes);



app.listen('5000',()=>{
    console.log("conected to port 5000");
})