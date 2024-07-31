const express = require('express');
// tasks controller responsability is to get the data from the model and send it to the view
const tasksController = require('./controllers/tasksController'); 
const router = express.Router();

router.get('/tasks', tasksController.getAll);



module.exports = router;