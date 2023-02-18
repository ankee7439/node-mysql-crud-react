import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
const Update = () => {
    const [book, setBook] =  useState({
        title:"",
        details:"",
        price:"",
        cover:"",
    });

    const navigate = useNavigate();
    const location = useLocation();

    const bookId = location.pathname.split("/")[2];

    const handleChange = (e) =>{
        setBook((prev)=>({...prev, [e.target.name]: e.target.value}));
      
    }
    const handleClick = async (e) =>{
        e.preventDefault();
        try {
            await axios.put("http://localhost:5000/books/"+bookId, book);
            navigate("/");
        } catch (error) {
            console.log(error);
        }

    }
    console.log(book);
    return (
    <div className='from'>
        <h2>Edit Books</h2>
      <input type="text" onChange={handleChange} name='title' placeholder='title' />
      <input type="text" onChange={handleChange} name='details' placeholder='details' />
      <input type="text" onChange={handleChange} name='cover' placeholder='cover' />
      <input type="text" onChange={handleChange} name='price' placeholder='price' />
      <button onClick={handleClick}>Update Now</button>
    </div>
  )
}

export default Update;

