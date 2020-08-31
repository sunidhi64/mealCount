const router = require('express').Router();
let Student = require('../models/student.model');
let MealMenu = require('../models/meal_menu.model');
let Menu = require('../models/meal_menu.model');


router.route('/login').post((req, res) => {
    })
});

router.route('messmenu/:id').get((req, res) => {
      Menu.findById(req.params.id)
router.route('/messmenu/mon').post('/new', (req, res) => {
    const meal_update = req.body;
    const newmeal_update = new meal_update(meal)
          .then(meal => res.json(meal))
          .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/messmenu/tues').post('/new', (req, res) => {
    const meal_update = req.body;
    const newmeal_update = new meal_update(meal)
      .then(meal => res.json(meal))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/messmenu/wed').post('/new', (req, res) => {
    const meal_update = req.body;
    const newmeal_update = new meal_update(meal)
      .then(meal => res.json(meal))
      .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/messmenu/thr').post('/new', (req, res) => {
    const meal_update = req.body;
    const newmeal_update = new meal_update(meal)
      .then(meal => res.json(meal))
      .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/messmenu/fri').post('/new', (req, res) => {
    const meal_update = req.body;
    const newmeal_update = new meal_update(meal)
      .then(meal => res.json(meal))
      .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/messmenu/sat').post('/new', (req, res) => {
    const meal_update = req.body;
    const newmeal_update = new meal_update(meal)
      .then(meal => res.json(meal))
      .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/messmenu/sun').post('/new', (req, res) => {
      const meal_update = req.body;
      const newmeal_update = new meal_update(meal)
        .then(meal => res.json(meal))
        .catch(err => res.status(400).json('Error: ' + err));
});


