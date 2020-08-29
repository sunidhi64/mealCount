const router = require('express').Router();
const Student_registration = require('../models/Student_registration.model.js');

router.get('/', (req, res) => {
    Student_registration.find()
    .then(appments => {
        res.status(200).json(appments);
    })
    .catch(err => {
        res.status(400).json({Error: err.message});
    });
});

router.post('/new', (req, res) => {
    const Student_registration = req.body;
    const newStudent_registration = new Student_registration(Student_registration);
    newStudent_registration.save()
    .then(app => {
        res.status(200).json(app);
    })
    .catch(err => {
        res.status(400).json({Error: err.message});
    });
});

router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const toBeUpdated = req.body;
    Student_registration.findByIdAndUpdate(id, req.body, { new: true})
    Student_registration.save()
    .then(() => {
        return res.status(200).json('Registration updated..');
    })
    .catch(err => {
        return res.status(400).json({Error: err.message});
    });
});  

router.delete('/delete/:id', (req, res) => {
    try {
        const toBeDeleted = req.params.id
        Student_registration.findByIdAndDelete(toBeDeleted)
        .then(() => {
            res.status(200).json('Student deleted successfully..');
        })
        .catch(err => {
            res.status(400).json({Error: err.message});
        });
    }
    catch (err) {
        res.status(500).json({Error: err.message});
    }
});

module.exports = router;