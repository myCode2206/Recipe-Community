/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import MyNav from "../Navbar/MyNav";
import SearchForm from "../Search Bar/SearchForm";
import MyCard from "../Cards/MyCard";
import Footer from "../footer/Footer";
import BCard from "../Cards/BCard";
import axios from 'axios';

export const MyBlogs = () => {

  const[blogs,setblogs]=useState([]);


  async function getAllBlogs()
  {
    try{
      const res= await axios.get("http://localhost:5000/blog/")
      {console.log(res.data);}
      setblogs(res.data);
    }
    catch(e)
    {
      console.log('unable to fetch all blogs data');
    }
  }

  useEffect(() => {
    getAllBlogs();
}, []);

  const flexbox = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  
  return (
    <>
      <MyNav />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Explore's The Blogs </h1>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <SearchForm />
      </div>


      <div className="container"  style={flexbox}>
      {
      blogs.map((blog)=>{
        return <BCard 
          key={blog._id}
          blog={blog}
        />
        
      })
      }
     
      </div>

      <Footer />
    </>
  );
};
