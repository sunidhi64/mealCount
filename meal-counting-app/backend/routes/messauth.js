const router = require('express').Router();
let messAuthority = require('../models/messAuthority.model');
let Student = require('../models/student.model');

router.route('/id:/registerstudent').post(function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    const newuser = new Student();
    newuser.firstName = firstName;
    newuser.lastName = lastName;
    newuser.password = password;
    newuser.save()
        .then(() => res.json('Student added'))
        .catch(err => res.status(404).json('err' + err));


});

router.route('/register').post(function(req, res) {
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const password = req.body.password;

    const newuser = new (messAuthority);
    newuser.firstname = firstname;
    newuser.lastname = lastname;
    newuser.password = password;


    newuser.save(function(err, savedStudent) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        return res.status(200).send();
    })
});

router.route('/login').post(function(req, res) {
    const firstname = req.body.firstname;
    const password  = req.body.password;
    messAuth.findOne({username : username, password: password}, function(err, messauth) {
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
