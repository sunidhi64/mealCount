const router = require('express').Router();
let MessAuthority = require('../models/messAuthority.model');
//let Student = require('../models/student.model');




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
