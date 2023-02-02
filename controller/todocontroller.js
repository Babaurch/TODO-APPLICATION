import Todo from "../model/todomodel.js";



export const todoTaskController = async (req, res) => {
    const {todoValue} = req.body;
    console.log(todoValue);
    try {
        const todoTask = await Todo.create({todoValue})
        res.json({data: todoTask})
    } catch (error) {
        res.json(error.message)
    } 
}

