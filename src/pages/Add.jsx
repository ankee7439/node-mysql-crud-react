import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
const Add = () => {
    const [book, setBook] =  useState({
        title:"",
        details:"",
        price:"",
        cover:"",
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setBook((prev)=>({...prev, [e.target.name]: e.target.value}));
      
    }
    const handleClick = async (e) =>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/books", book);
            navigate("/");
        } catch (error) {
            console.log(error);
        }

    }
    console.log(book);
    return (
    <div className='from'>
        <h2>Add New Books</h2>
      <input type="text" onChange={handleChange} name='title' placeholder='title' />
      <input type="text" onChange={handleChange} name='details' placeholder='details' />
      <input type="text" onChange={handleChange} name='cover' placeholder='cover' />
      <input type="text" onChange={handleChange} name='price' placeholder='price' />
      <button onClick={handleClick}>Add Now</button>
    </div>
  )
}

export default Add
