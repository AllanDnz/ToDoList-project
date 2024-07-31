const tasksModel = require('../models/tasksModel');

// function to get all tasks from the database
const getAll = async (req, res) => {
    const tasks = await tasksModel.getAll();

    return res.status(200).json(tasks);
}


module.exports = {
    getAll,
    };