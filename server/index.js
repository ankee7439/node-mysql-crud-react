import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql';
dotenv.config();
const app = express();

app.use(express.json());

// Connect to DataBase
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"book"
});


// Get all Data from DataBase
app.get('/books',(req,res)=>{
    // your sql query
    const sql = "SELECT * FROM books";
    // Fire the Query
    db.query(sql,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
});

// Create New Data into DataBase
app.post('/books',(req,res)=>{
    // your sql query
    const sql = "INSERT INTO `books`(`title`, `details`, `cover`,`price`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.details,
        req.body.cover,
        req.body.price,
    ];
    // Fire the Query
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("One row inserted successfully!!!");
        
        
    });
});

// Update a record from the DataBase
app.put('/books/:id',(req,res)=>{
    const bookId = req.params.id;
    const sql = "UPDATE `books` SET `title`= ? ,`details`= ? ,`cover`= ? ,`price`= ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.details,
        req.body.cover,
        req.body.price,
    ];

    db.query(sql,[...values, bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("updated sucessfully!!!");
    })

    
});

// Delete a book from the DataBase

app.delete('/books/:id',(req,res)=>{
    const bookId = req.params.id;
    const sql = "DELETE FROM `books` WHERE id = ?";

    db.query(sql,[bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Deleted");
    })
});



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})