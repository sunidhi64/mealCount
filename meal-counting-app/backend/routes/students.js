const router = require('express').Router();
let Student = require('../models/student.model');
let MealMenu = require('../models/meal_menu.model');


router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password  = req.body.password;
    Student.findOne({username: username, password: password}, function(err, student) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        if(!messauth) {
            return res.status(404).send();
        }
        return res.status(200).send();
    })
});



router.route('/messmenu').get(function(req, res) {
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

router.route('messmenu/:id').get((req, res) => {
      Menu.findById(req.params.id)
        .then(Menu => res.json(Menu))
        .catch(err => res.status(400).json('Error: ' + err));
});







module.exports = router;
