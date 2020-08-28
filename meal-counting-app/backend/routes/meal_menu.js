const router = require('express').Router();
let meal_menu = require('../models/student.model');

router.route('/').get((req, res) => {
    meal_menu.find()
    .then(meal_menu => res.json(meal_menu))
    .catch(err => res.status(400).json({Error: err.message});
});

router.delete('/delete', (req, res) => {
    try {
        const Deleted = req
        meal_menu.Delete(Deleted)
        .then(() => {
            res.status(200).json('Menu deleted successfully..');
        })
        .catch(err => {
            res.status(400).json({Error: err.message});
        });
    }
    catch (err) {
        res.status(500).json({Error: err.message});
    }
});


router.post('/new', (req, res) => {
    const meal_menu = req.body;
    const newmeal_menu = new meal_menu(meal_menu);
    newmeal_menu.save()
    .then(app => {
        res.status(200).json(app);
    })
    .catch(err => {
        res.status(400).json({Error: err.message});
    });
});
module.exports = router;


