import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom';


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/books");
                setBooks(res.data);
                console.log(res);
            }
            catch(err){
                console.log(err)
            }
        }
        fetchAllBooks();
    },[])

    // Delete Each books
    const handleDelete= async  (id)=>{
      try {
        await axios.delete("http://localhost:5000/books/"+id);
        window.location.reload();
      } catch (error) {
        console.log(error);        
      }
    }

  return (
    <div>
      <div className="books">
        {
            books.map(book=>(
                <div className="book" key={book.id}>
                    {book.cover && <img src={book.cover} alt="" />}
                    <h4>{book.title}</h4>
                    <h4>{book.details}</h4>
                    <span>{book.price}</span>
                    <br />
                    <button><Link to={`/update/${book.id}`}>Update</Link></button>
                    <button onClick={()=>handleDelete(book.id)}>Delete</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Books
