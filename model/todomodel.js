import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    todoValue: {
        type:String,
        // required: true
    }
})

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
