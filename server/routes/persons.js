const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

//Gets back all the persons
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        res.send({persons: persons});
    } catch(err) {
        res.json({ message: err });
    }
});

//Gets back a specific person
router.get('/:personId', async (req, res) => {
    try {
        const person = await Person.findById(req.params.personId);
        res.json(person);
    } catch(err) {
        res.json({message: err});
    }
});

//Adds a person
router.post('/', async (req, res) => {
    const person = new Person({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        location: req.body.location,
        eventName: req.body.eventName,
        date: req.body.date,
        profileUrl: req.body.profileUrl,
        notes: req.body.notes
    });

    try {
        const addedPerson = await person.save();
        res.json(addedPerson);
    } catch(err) {
        res.json({message: err});
    }
});

//Deletes a specific person
router.delete('/:personId', async (req, res) => {
    try {
        const removedPerson = await Person.remove({_id: req.params.personId});
        res.json(removedPerson);
    } catch(err) {
        res.json({message: err});
    }
});

//Updates a person's info
router.patch('/:personId', async (req, res) => {
    try {
        const updatedPerson = await Person.updateOne(
            { _id: req.params.personId },
            { $set: { 
                firstName: (req.body.firstName === null) ? firstName : req.body.firstName,
                lastName: (req.body.lastName === null) ?  lastName : req.body.lastName,
                location: (req.body.location === null) ? location : req.body.location,
                eventName: (req.body.eventName === null) ? eventName : req.body.eventName,
                date: (req.body.date === null) ? date : req.body.date,
                profileUrl: (req.body.profileUrl === null) ? profileUrl : req.body.profileUrl,
                notes: (req.body.notes === null) ? notes : req.body.notes}
            }
        );
        res.json(updatedPerson);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;