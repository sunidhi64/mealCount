const router = require('express').Router();
let attendanceF = require('../models/attendanceF.model');

router.route('/').get((req, res) => {
    attendanceF.find()
    .then(attendanceF => res.json(attendanceF))
    .catch(err => res.status(400).json({Error: err.message});
});


router.route('/attendance/mon').post('/new', (req, res) => {
    try{
        const details = req.body;
        if (! Object.values(details.mon).every(x => (x)) ) 
        return res
               .status(400)
               .json({Error: 'Please fill True or False :('})


router.route('/messmenu/tue').post('/new', (req, res) => {
    try{
        const details = req.body;
        if (! Object.values(details.tue).every(x => (x)) ) 
        return res
                .status(400)
                .json({Error: 'Please fill True or False :('})


router.route('/attendance/wed')post('/new', (req, res) => {
    try{
    const details = req.body;
    if (! Object.values(details.wed).every(x => (x)) ) 
        return res
                .status(400)
                .json({Error: 'Please fill True or False :('})

router.route('/attendance/thu')post('/new', (req, res) => {
    try{
    const details = req.body;
    if (! Object.values(details.thu).every(x => (x)) ) 
        return res
                .status(400)
                .json({Error: 'Please fill True or False :('})


router.route('/attendance/fri')post('/new', (req, res) => {
    try{
    const details = req.body;
    if (! Object.values(details.fri).every(x => (x)) ) 
        return res
                .status(400)
                .json({Error: 'Please fill True or False :('})

router.route('/attendance/sat')post('/new', (req, res) => {
    try{
    const details = req.body;
    if (! Object.values(details.sat).every(x => (x)) ) 
        return res
                .status(400)
                .json({Error: 'Please fill True or False :('})
                
                
router.route('/attendance/sun')post('/new', (req, res) => {
    try{
    const details = req.body;
    if (! Object.values(details.sun).every(x => (x)) ) 
        return res
                .status(400)
                .json({Error: 'Please fill True or False :('})
