const express = require ('express');
const mongoose = require("mongoose");
const app = express();



//Create Responce
app.get("/",(req,res)=>[
    res.send('Hello Node')
]);

//Connect Mongodb Database
mongoose.connect("mongodb+srv://sathyangitodoapp:ZiH6We8VeQGHG8k6@todo-app.iglmv.mongodb.net/Todo-App?retryWrites=true&w=majority&appName=Todo-App")
    .then(() => {
        console.log("Connected to Database!");
        //Create Server
        app.listen(3000,()=>{
            console.log("Server is running on port 3000");
        })
    })
    .catch((error)=>{
        console.log(error)
        console.log("Connection Failed!");
    });
