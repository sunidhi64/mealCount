const router = require('express').Router();
const Appointment = require('../models/Student_list.model.js');

router.get('/', (req, res) => {
    Student_list.find()
    .then(appments => {
        res.status(200).json(Student_list);
    })
    .catch(err => {
        res.status(400).json({Error: err.message});
    });
});


router.patch('/view', (req, res) => {
    const searchDetails = req.body;
    Student_list.find(searchDetails)
    .then(foundStudents => {
        console.log(foundStudents);
        if (foundStudents.length == 0) 
            return res.status(400).json({Error: "Student not found"})
        else 
        {
            return res.status(200).json({foundStudents});}
    })
    .catch (err => { 
        res.status(400).json({Error: err})
    });
});
