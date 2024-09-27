const mongoose = require("mongoose");

const TodoItemSchema = mongoose.Schema(
    {
        "title":{
            type: String,
            required: true
        },
        "description":{
            type: String,
            required: true
        },
        "time":{
            type: Number,
            required: true
        },
        "date":{
            type: Date,
            required: true
        },
        "status":{
            type: String,
            required:true
        }
    },
    {
        Timestamp:true,
    }
);

const TodoItem = mongoose.model("TodoItem",TodoItemSchema);

module.exports = TodoItem;