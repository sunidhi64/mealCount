const router = require('express').Router();
let Student = require('../models/student.model');
let Menu = require('../models/meal_menu.model');
let Attendance = require('../models/attendanceF.model');


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




router.route('/messmenu/mon').get((req, res) => {
      Menu.find()
        .then(menu => res.json(menu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/messmenu/tue').get((req, res) => {
      Menu.find()
        .then(Menu => res.json(Menu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/messmenu/wed').get((req, res) => {
      Menu.find()
        .then(Menu => res.json(Menu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/messmenu/thu').get((req, res) => {
      Menu.find()
        .then(Menu => res.json(Menu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/messmenu/fri').get((req, res) => {
      Menu.find()
        .then(Menu => res.json(Menu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/messmenu/sat').get((req, res) => {
      Menu.find()
        .then(Menu => res.json(Menu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/messmenu/sun').get((req, res) => {
      Menu.find()
        .then(Menu => res.json(Menu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/attendance/mon').post((req, res) => {
    const breakfastVegMon = req.body.breakfastVegMon;
    const breakfastNonVegMon = req.body.breakfastNonVegMon;
    const lunchVegMon = req.body.lunchVegMon;
    const lunchNonVegMon = req.body.lunchNonVegMon;
    const snacksVegMon = req.body.snacksVegMon;
    const snacksNonVegMon = req.body.snacksNonVegMon;
    const dinnerVegMon = req.body.dinnerVegMon;
    const dinnerNonVegMon = req.body.dinnerNonVegMon;
    const noBreakfastMon = req.body.noBreakfastMon;
    const noLunchMon = req.body.noLunchMon;
    const noSnacksMon = req.body.noSnacksMon;
    const noDinnerMon = req.body.noDinnerMon;
 
    const meal = new Attendance({
        breakfastVegMon,
        breakfastNonVegMon,
        lunchVegMon,
        lunchNonVegMon,
        snacksVegMon,
        snacksNonVegMon,
        dinnerVegMon,
        dinnerNonVegMon,
        noBreakfastMon,
        noLunchMon,
        noSnacksMon,
        noDinnerMon,
    });
    
    meal.save()
    .then(() => res.json('Menu Added for monday'))
    .catch(err => res.status(400).json('error: ' + err));
});

router.route('/attendance/tue').post((req, res) => {
    const breakfastVegTue = req.body.breakfastVegTue;
    const breakfastNonVegTue = req.body.breakfastNonVegTue;
    const lunchVegTue = req.body.lunchVegTue;
    const lunchNonVegTue = req.body.lunchNonVegTue;
    const snacksVegTue = req.body.snacksVegTue;
    const snacksNonVegTue = req.body.snacksNonVegTue;
    const dinnerVegTue = req.body.dinnerVegTue;
    const dinnerNonVegTue = req.body.dinnerNonVegTue;
    const noBreakfastTue = req.body.noBreakfastTue;
    const noLunchTue = req.body.noLunchTue;
    const noSnacksTue = req.body.noSnacksTue;
    const noDinnerTue = req.body.noDinnerTue;

    const meal = new Attendance({
        breakfastVegTue,
        breakfastNonVegTue,
        lunchVegTue,
        lunchNonVegTue,
        snacksVegTue,
        snacksNonVegTue,
        dinnerVegTue,
        dinnerNonVegTue,
        noBreakfastTue,
        noLunchTue,
        noSnacksTue,
        noDinnerTue,
    })
    meal.save()
    .then(() => res.json('Menu Added for Tuesday'))
    .catch(err => res.status(400).json('error: ' + err));
});

router.route('/attendance/wed').post((req, res) => {
    const breakfastVegWed = req.body.breakfastVegWed;
    const breakfastNonVegWed = req.body.breakfastNonVegWed;
    const lunchVegWed = req.body.lunchVegWed;
    const lunchNonVegWed = req.body.lunchNonVegWed;
    const snacksVegWed = req.body.snacksVegWed;
    const snacksNonVegWed = req.body.snacksNonVegWed;
    const dinnerVegWed = req.body.dinnerVegWed;
    const dinnerNonVegWed = req.body.dinnerNonVegWed;
    const noBreakfastWed = req.body.noBreakfastWed;
    const noLunchWed = req.body.noLunchWed;
    const noSnacksWed = req.body.noSnacksWed;
    const noDinnerWed = req.body.noDinnerWed;
    
    
    const meal = new Attendance({
        breakfastVegWed,
        breakfastNonVegWed,
        lunchVegWed,
        lunchNonVegWed,
        snacksVegWed,
        snacksNonVegWed,
        dinnerVegWed,
        dinnerNonVegWed,
        noBreakfastWed,
        noLunchWed,
        noSnacksWed,
        noDinnerWed,
        });
    
    meal.save()
    .then(() => res.json('Menu Added for wednesday'))
    .catch(err => res.status(400).json('error: ' + err));
    
});

router.route('/attendance/thu').post((req, res) => {
    const breakfastVegThu = req.body.breakfastVegThu;
    const breakfastNonVegThu = req.body.breakfastNonVegThu;
    const lunchVegThu = req.body.lunchVegThu;
    const lunchNonVegThu = req.body.lunchNonVegThu;
    const snacksVegThu = req.body.snacksVegThu;
    const snacksNonVegThu = req.body.snacksNonVegThu;
    const dinnerVegThu = req.body.dinnerVegThu;
    const dinnerNonVegThu = req.body.dinnerNonVegThu;
    const noBreakfastThu = req.body.noBreakfastThu;
    const noLunchThu = req.body.noLunchThu;
    const noSnacksThu = req.body.noSnacksThu;
    const noDinnerThu = req.body.noDinnerThu;
    
    const meal = new Menu({
        breakfastVegThu,
        breakfastNonVegThu,
        lunchVegThu,
        lunchNonVegThu,
        snacksVegThu,
        snacksNonVegThu,
        dinnerVegThu,
        dinnerNonVegThu,
        noBreakfastThu,
        noLunchThu,
        noSnacksThu,
        noDinnerThu,
    });
    
    meal.save()
    .then(() => res.json('Menu Added for wednesday'))
    .catch(err => res.status(400).json('error: ' + err));
    
});

router.route('/attendance/fri').post((req, res) => {
    
    const breakfastVegFri = req.body.breakfastVegFri;
    const breakfastNonVegFri = req.body.breakfastNonVegFri;
    const lunchVegFri = req.body.lunchVegFri;
    const lunchNonVegFri = req.body.lunchNonVegFri;
    const snacksVegFri = req.body.snacksVegFri;
    const snacksNonVegFri = req.body.snacksNonVegFri;
    const dinnerVegFri = req.body.dinnerVegFri;
    const dinnerNonVegFri = req.body.dinnerNonVegFri;
    const noBreakfastFri = req.body.noBreakfastFri;
    const noLunchFri = req.body.noLunchFri;
    const noSnacksFri = req.body.noSnacksFri;
    const noDinnerFri = req.body.noDinnerFri;

    const meal = new Attendance({
        breakfastVegFri,
        breakfastNonVegFri,
        lunchVegFri,
        lunchNonVegFri,
        snacksVegFri,
        snacksNonVegFri,
        dinnerVegFri,
        dinnerNonVegFri,
        noBreakfastFri,
        noLunchFri,
        noSnacksFri,
        noDinnerFri,
    });
    
    meal.save()
    .then(() => res.json('Menu Added for friday'))
    .catch(err => res.status(400).json('error: ' + err));
    
});

router.route('/attendance/sat').post((req, res) => {
    const breakfastVegSat = req.body.breakfastVegSat;
    const breakfastNonVegSat = req.body.breakfastNonVegSat;
    const lunchVegSat = req.body.lunchVegSat;
    const lunchNonVegSat = req.body.lunchNonVegSat;
    const snacksVegSat = req.body.snacksVegSat;
    const snacksNonVegSat = req.body.snacksNonVegSat;
    const dinnerVegSat = req.body.dinnerVegSat;
    const dinnerNonVegSat = req.body.dinnerNonVegSat;
    const noBreakfastSat = req.body.noBreakfastSat;
    const noLunchSat = req.body.noLunchSat;
    const noSnacksSat = req.body.noSnacksSat;
    const noDinnerSat = req.body.noDinnerSat;
    const meal = new Attendance({
        breakfastVegSat,
        breakfastNonVegSat,
        lunchVegSat,
        lunchNonVegSat,
        snacksVegSat,
        snacksNonVegSat,
        dinnerVegSat,
        dinnerNonVegSat,
        noBreakfastSat,
        noLunchSat,
        noSnacksSat,
        noDinnerSat,
    });
    
    meal.save()
    .then(() => res.json('Menu Added for saturday'))
    .catch(err => res.status(400).json('error: ' + err));
    
});


router.route('/attendance/sun').post((req, res) => {
    
    const breakfastVegSun = req.body.breakfastVegSun;
    const breakfastNonVegSun = req.body.breakfastNonVegSun;
    const lunchVegSun = req.body.lunchVegSun;
    const lunchNonVegSun = req.body.lunchNonVegSun;
    const snacksVegSun = req.body.snacksVegSun;
    const snacksNonVegSun = req.body.snacksNonVegSun;
    const dinnerVegSun = req.body.dinnerVegSun;
    const dinnerNonVegSun = req.body.dinnerNonVegSun;
    const noBreakfastSun = req.body.noBreakfastSun;
    const noLunchSun = req.body.noLunchSun;
    const noSnacksSun = req.body.noSnacksSun;
    const noDinnerSun = req.body.noDinnerSun;

    const meal = new Attendance({
        breakfastVegSun,
        breakfastNonVegSun,
        lunchVegSun,
        lunchNonVegSun,
        snacksVegSun,
        snacksNonVegSun,
        dinnerVegSun,
        dinnerNonVegSun,
        noBreakfastSun,
        noLunchSun,
        noSnacksSun,
        noDinnerSun,
    });
    
    meal.save()
    .then(() => res.json('Menu Added for sunday'))
    .catch(err => res.status(400).json('error: ' + err));
    
});








module.exports = router;
