const router = require('express').Router();
let MessAuthority = require('../models/messAuthority.model');
let Student = require('../models/student.model');
let Menu = require('../models/meal_menu.model');




router.route('/register').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new MessAuthority({
        firstName,
        lastName,
        username,
        password,
    });


    newUser.save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json('error: ' + err));
    
});


router.route('/messmenu/mon').post((req, res) => {
    const breakfastVegMon = req.body.breakfastVegMon;
    const breakfastNonVegMon = req.body.breakfastNonVegMon;
    const lunchVegMon = req.body.lunchVegMon;
    const lunchNonVegMon = req.body.lunchNonVegMon;
    const snacksVegMon = req.body.snacksVegMon;
    const snacksNonVegMon = req.body.snacksNonVegMon;
    const dinnerVegMon = req.body.dinnerVegMon;
    const dinnerNonVegMon = req.body.dinnerNonVegMon;
 
    const meal = new Menu({
        breakfastVegMon,
        breakfastNonVegMon,
        lunchVegMon,
        lunchNonVegMon,
        snacksVegMon,
        snacksNonVegMon,
        dinnerVegMon,
        dinnerNonVegMon,
    });
    
    meal.save()
    .then(() => res.json('Menu Added for monday'))
    .catch(err => res.status(400).json('error: ' + err));
});
router.route('/messmenu/tue').post((req, res) => {
    const breakfastVegTue = req.body.breakfastVegTue;
    const breakfastNonVegTue = req.body.breakfastNonVegTue;
    const lunchVegTue = req.body.lunchVegTue;
    const lunchNonVegTue = req.body.lunchNonVegTue;
    const snacksVegTue = req.body.snacksVegTue;
    const snacksNonVegTue = req.body.snacksNonVegTue;
    const dinnerVegTue = req.body.dinnerVegTue;
    const dinnerNonVegTue = req.body.dinnerNonVegTue;

    const meal = new Menu({
        breakfastVegTue,
        breakfastNonVegTue,
        lunchVegTue,
        lunchNonVegTue,
        snacksVegTue,
        snacksNonVegTue,
        dinnerVegTue,
        dinnerNonVegTue,
    })
    meal.save()
    .then(() => res.json('Menu Added for Tuesday'))
    .catch(err => res.status(400).json('error: ' + err));
});


router.route('/messmenu/wed').post((req, res) => {
    const breakfastVegWed = req.body.breakfastVegWed;
    const breakfastNonVegWed = req.body.breakfastNonVegWed;
    const lunchVegWed = req.body.lunchVegWed;
    const lunchNonVegWed = req.body.lunchNonVegWed;
    const snacksVegWed = req.body.snacksVegWed;
    const snacksNonVegWed = req.body.snacksNonVegWed;
    const dinnerVegWed = req.body.dinnerVegWed;
    const dinnerNonVegWed = req.body.dinnerNonVegWed;
    
    
    const meal = new Menu({
        breakfastVegWed,
        breakfastNonVegWed,
        lunchVegWed,
        lunchNonVegWed,
        snacksVegWed,
        snacksNonVegWed,
        dinnerVegWed,
        dinnerNonVegWed,
        });
    
    meal.save()
    .then(() => res.json('Menu Added for wednesday'))
    .catch(err => res.status(400).json('error: ' + err));
    
});





router.route('/messmenu/thu').post((req, res) => {
    const breakfastVegThu = req.body.breakfastVegThu;
    const breakfastNonVegThu = req.body.breakfastNonVegThu;
    const lunchVegThu = req.body.lunchVegThu;
    const lunchNonVegThu = req.body.lunchNonVegThu;
    const snacksVegThu = req.body.snacksVegThu;
    const snacksNonVegThu = req.body.snacksNonVegThu;
    const dinnerVegThu = req.body.dinnerVegThu;
    const dinnerNonVegThu = req.body.dinnerNonVegThu;
    
    const meal = new Menu({
        breakfastVegThu,
        breakfastNonVegThu,
        lunchVegThu,
        lunchNonVegThu,
        snacksVegThu,
        snacksNonVegThu,
        dinnerVegThu,
        dinnerNonVegThu,
    });
    
    meal.save()
    .then(() => res.json('Menu Added for wednesday'))
    .catch(err => res.status(400).json('error: ' + err));
    
});


router.route('/messmenu/fri').post((req, res) => {
    
    const breakfastVegFri = req.body.breakfastVegFri;
    const breakfastNonVegFri = req.body.breakfastNonVegFri;
    const lunchVegFri = req.body.lunchVegFri;
    const lunchNonVegFri = req.body.lunchNonVegFri;
    const snacksVegFri = req.body.snacksVegFri;
    const snacksNonVegFri = req.body.snacksNonVegFri;
    const dinnerVegFri = req.body.dinnerVegFri;
    const dinnerNonVegFri = req.body.dinnerNonVegFri;

    const meal = new Menu({
        breakfastVegFri,
        breakfastNonVegFri,
        lunchVegFri,
        lunchNonVegFri,
        snacksVegFri,
        snacksNonVegFri,
        dinnerVegFri,
        dinnerNonVegFri,
    });
    
    meal.save()
    .then(() => res.json('Menu Added for friday'))
    .catch(err => res.status(400).json('error: ' + err));
    
});

router.route('/messmenu/sat').post((req, res) => {
    const breakfastVegSat = req.body.breakfastVegSat;
    const breakfastNonVegSat = req.body.breakfastNonVegSat;
    const lunchVegSat = req.body.lunchVegSat;
    const lunchNonVegSat = req.body.lunchNonVegSat;
    const snacksVegSat = req.body.snacksVegSat;
    const snacksNonVegSat = req.body.snacksNonVegSat;
    const dinnerVegSat = req.body.dinnerVegSat;
    const dinnerNonVegSat = req.body.dinnerNonVegSat;
    const meal = new Menu({
        breakfastVegSat,
        breakfastNonVegSat,
        lunchVegSat,
        lunchNonVegSat,
        snacksVegSat,
        snacksNonVegSat,
        dinnerVegSat,
        dinnerNonVegSat,
    });
    
    meal.save()
    .then(() => res.json('Menu Added for saturday'))
    .catch(err => res.status(400).json('error: ' + err));
    
});

    

router.route('/messmenu/sun').post((req, res) => {
    
    const breakfastVegSun = req.body.breakfastVegSun;
    const breakfastNonVegSun = req.body.breakfastNonVegSun;
    const lunchVegSun = req.body.lunchVegSun;
    const lunchNonVegSun = req.body.lunchNonVegSun;
    const snacksVegSun = req.body.snacksVegSun;
    const snacksNonVegSun = req.body.snacksNonVegSun;
    const dinnerVegSun = req.body.dinnerVegSun;
    const dinnerNonVegSun = req.body.dinnerNonVegSun;

    const meal = new Menu({
        breakfastVegSun,
        breakfastNonVegSun,
        lunchVegSun,
        lunchNonVegSun,
        snacksVegSun,
        snacksNonVegSun,
        dinnerVegSun,
        dinnerNonVegSun,
    });
    
    meal.save()
    .then(() => res.json('Menu Added for sunday'))
    .catch(err => res.status(400).json('error: ' + err));
    
});





 



router.route('/registerstudent/id:').post(function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;

    const newuser = new Student({
        firstName,
        lastName,
        username,
        password,
    });
    
    
    newuser.save()
        .then(() => res.json('Student added'))
        .catch(err => res.status(404).json('err' + err));


});


router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password  = req.body.password;
    MessAuthority.findOne({username: username, password: password}, function(err, messauth) {
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





module.exports = router;
