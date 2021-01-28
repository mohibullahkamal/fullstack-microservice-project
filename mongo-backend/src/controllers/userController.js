const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId; // check whether valid id...

var { userModel } = require('../models/userModel');

// Get ALL users from DB...---> localhost:3000/users/
router.get('/', (req, res) => {
	userModel.find((err, docs) => {
		if (!err) { res.send(docs); }
		else { console.log('Error in retrieving users: ' + JSON.stringify(err, undefined, 2)); }
	});
});

// get feedback with particular Id...
router.get('/:id', (req, res) => {
	if (!ObjectId.isValid(req.params.id))   //  check to see if mongoId is valid...
		return res.status(400).send(`No records with the given id: ${req.params.id}`)

	userModel.findById(req.params.id, (err, doc) => {
      if(!err) { res.send(doc); }
      else { console.log('Error in retrieving user: ' + JSON.stringify(err, undefined, 2)); }
	})
});

// Posts NEW data from feedback form (Angular form) to DB...
router.post('/', (req, res) => {
	var newUser = new userModel({
		name:    req.body.name,
		email:   req.body.email,
		comment: req.body.comment
	});
	newUser.save((err, doc) => {
		if (!err) { res.send(doc); }
		else { console.log('Error in user save: ' + JSON.stringify(err, undefined, 2)); }
	});
});

// // Put method to update existing data in DB ....
// router.put('/:id', (req, res) => {
// 	if (!ObjectId.isValid(req.params.id))   //  check to see if mongoId is valid...
// 		return res.status(400).send(`No records with the given id: ${req.params.id}`)

// 	var changeUser = {
   // name:    req.body.name,
   // email:   req.body.email,
   // comment: req.body.comment
// 	};

// 	userModel.findByIdAndUpdate(req.params.id, { $set: changeUser }, { new: true }, (err, doc) => {
// 		if (!err) { res.send(doc); }
// 		else { console.log('Error in feedback updating : ' + JSON.stringify(err, undefined, 2)); }
// 	});
// });

// // Delete user from DB...
// router.delete('/:id', (req, res) => {
// 	if (!ObjectId.isValid(req.params.id))   //  check to see if mongoId is valid...
// 		return res.status(400).send(`No records with the given id: ${req.params.id}`)

// 	userModel.findByIdAndRemove(req.params.id, (err, doc) => {
// 		if (!err) { res.send(doc); }
// 		else { console.log('Error in user delete : ' + JSON.stringify(err, undefined, 2)); }
// 	});
// })


module.exports = router;