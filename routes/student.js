const express = require('express');

const router = express.Router();

const Student = require('../models/student');


// route: /student
//display student courses, major, graduation year and years completed
router.get('/', async (req,res) => {
    await Student.find({}).then((foundStudent) => {
        // console.log(foundStudent);
        // res.render('StudentDashboard', {student: foundStudent})

        res.json(foundStudent);

    }).catch((err) => {
        console.log(err.message);
    })

})

//route: /student/register
//go to new form
//new
router.get('/register', (req,res) => {

    res.json(req.body);

})

//route: /student
//delete
router.delete('/:id' , async (req,res) => {

    await Student.findByIdAndRemove(req.params.id).then((deletedStudent) => {
        console.log("Deleted student: " + deletedStudent);
        res.json(deletedStudent);
    }).catch((err) => {
        console.log(err.message);
    })

})

//update
router.put('/:id', async (req,res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body).then((response) => {
        res.json(response);
    }).catch((error) => {
        console.log(error.message);
    })
    })


//route: /student
//create
//redirect to student portal after creating the new student
router.post('/', async (req,res) => {

    console.log('res: ' + req.body)

    await Student.create(req.body).then((created) => {
        console.log("created " + created);
        res.json(created);
    }).catch((err) => {
        console.log(err.message);
    })

})

//edit
router.get('/:id', async (req,res) => {
    await Student.findById(req.params.id).then((response) => {
        res.json(response);
    })
})

module.exports = router;
