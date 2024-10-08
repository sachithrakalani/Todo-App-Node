const express = require ('express');
const mongoose = require("mongoose");
const TodoItem = require('./models/todoItem.model');
const app = express();

//Create Responce
app.get("/",(req,res)=>[
    res.send('Hello Node')
]);

//Middleware
app.use(express.json());

//Create Todo items
app.post('/api/todoitems', async (req,res)=>{
    try{
        const todoItem = await TodoItem.create(req.body);
        res.status(200).json(todoItem);
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

//Get all todos
app.get('/api/todoitems', async (req,res)=>{
    try{
        const todoItems = await TodoItem.find({});
        res.status(200).json(todoItems);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

//Update Todo item
app.put('/api/todoitem/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const todoitem = await TodoItem.findByIdAndUpdate(id, req.body);
        if(!todoitem){
            return res.status(404).json({message: "Todo Item is not Found"});
        }
        const updatedTodoItem = await TodoItem.findById(id);
        res.status(200).json(updatedTodoItem);
    }catch(erroe){
        res.status(500).json({message: erroe.message});
    }
});

//Delete Todo item
app.delete('/api/todoitem/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const todoitem = await TodoItem.findByIdAndDelete(id);
        if(!todoitem){
            return res.status(404).json({message: "Todo item is not Found"});
        }
        res.status(200).json({message: "Todo item deleted successfully"});
    }catch(error){
        console.log("ERROR")
        res.status(500).json({message: error.message});
    }
});

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
