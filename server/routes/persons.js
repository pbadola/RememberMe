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

router.get('/findconnection', async function(req, res) {
    // const persons = await Person.find();
    // for ( i = 0; i < persons.length; i++) {
    //     const person =  persons[i];
        var query = { $or: [  
            { $and: [
                { firstName: req.body.firstName },
                { firstName: {$exists: true}} ]},
            { $and: [
                { lastName: req.body.lastName},
                {lastName: {$exists: true}}]},
            { $and: [
                { eventName: req.body.eventName},
                {eventName: {$exists: true}}]},
            { $and: [
                { location: req.body.location},
                {location: {$exists: true}}]},
            { $and: [
                { profileUrl: req.body.profileUrl},
                {profileUrl: {$exists: true}}]},
            { $and: [
                { date: req.body.date},
                {date: {$exists: true}}]},
            { $and: [
                { notes: req.body.notes},
                {notes: {$exists: true}}]}] }
        await Person.find(query, async function(err, result) {
        // console.log(result);
        // res.send('Yay');
            res.json(result);
        }, {projection:{ "_id": 0 }})
    // }
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
        const person = await Person.findById(req.params.personId);
        const updatedPerson = await Person.updateOne(
            { _id: req.params.personId },
            { $set: { 
                firstName: (req.body.firstName === undefined) ? person.firstName : req.body.firstName,
                lastName: (req.body.lastName === undefined) ?  person.lastName : req.body.lastName,
                location: (req.body.location === undefined) ? person.location : req.body.location,
                eventName: (req.body.eventName === undefined) ? person.eventName : req.body.eventName,
                date: (req.body.date === undefined) ? person.date : req.body.date,
                profileUrl: (req.body.profileUrl === undefined) ? person.profileUrl : req.body.profileUrl,
                notes: (req.body.notes === undefined) ? person.notes : req.body.notes}
            }
        );
        res.json(updatedPerson);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;