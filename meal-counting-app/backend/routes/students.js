const router = require('express').Router();
let Student = require('../models/student.model');
let MealMenu = require('../models/meal_menu.model');

router.route('/login').post(function(req, res) {
    const firstName = req.body.firstName
    const password = req.body.password;
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(404).json('error' + err));
});



router.route('/seeMenu').get(function(req, res) {
    const items = [];
    if(!loggedIn)
        res.status(401).send();
    MealMenu.findOne({}, function(err, menu) {
        if (err)
            return res.status(404).send();
        db.collection('MealMenu').find.forEach(function(meal, err) {
            if (err)
                return res.status(404).send();
            items.push(meal);
           })
        db.close()
    })
});







module.exports = router;
