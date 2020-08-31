const router = require('express').Router();
let meal_menu = require('../models/meal-count.model');

router.route('/').get((req, res) => {
    meal-count.find()
    .then(meal-count => res.json(meal-count))
    .catch(err => res.status(400).json({Error: err.message});
});