const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId; // check whether valid id...

var { feedbackModel } = require('../models/feedbackModel');

// Get ALL feedbacks from DB...---> localhost:3000/feedbacks/
router.get('/', (req, res) => {
	feedbackModel.find((err, docs) => {
		if (!err) { res.send(docs); }
		else { console.log('Error in retrieving feedbacks: ' + JSON.stringify(err, undefined, 2)); }
	});
});

// get feedback with particular Id...
router.get('/:id', (req, res) => {
	if (!ObjectId.isValid(req.params.id))   //  check to see if mongoId is valid...
		return res.status(400).send(`No records with the given id: ${req.params.id}`)

	feedbackModel.findById(req.params.id, (err, doc) => {
      if(!err) { res.send(doc); }
      else { console.log('Error in retrieving feedback: ' + JSON.stringify(err, undefined, 2)); }
	})
});

// Posts NEW data from feedback form (Angular form) to DB...
router.post('/', (req, res) => {
	var feed = new feedbackModel({
		wasHelpful: req.body.wasHelpful,
		uiIsGood: req.body.uiIsGood,
		iWillUseIt: req.body.iWillUseIt,
		recommendOthers: req.body.recommendOthers,
		suggestions: req.body.suggestions,
	});
	feed.save((err, doc) => {
		if (!err) { res.send(doc); }
		else { console.log('Error in Feedback save: '
									+ JSON.stringify(err, undefined, 2)); }
	});
});

// // Put method to update existing data in DB ....
// router.put('/:id', (req, res) => {
// 	if (!ObjectId.isValid(req.params.id))   //  check to see if mongoId is valid...
// 		return res.status(400).send(`No records with the given id: ${req.params.id}`)

// 	var feedUpdate = {
// 		wasHelpful: req.body.wasHelpful,
// 		uiIsGood: req.body.uiIsGood,
// 		iWillUseIt: req.body.iWillUseIt,
// 		recommendOthers: req.body.recommendOthers,
// 		suggestions: req.body.suggestions,
// 	};

// 	feedbackModel.findByIdAndUpdate(req.params.id, { $set: feedUpdate }, { new: true }, (err, doc) => {
// 		if (!err) { res.send(doc); }
// 		else { console.log('Error in feedback updating : ' + JSON.stringify(err, undefined, 2)); }
// 	});
// });

// // Delete feedback from DB...
// router.delete('/:id', (req, res) => {
// 	if (!ObjectId.isValid(req.params.id))   //  check to see if mongoId is valid...
// 		return res.status(400).send(`No records with the given id: ${req.params.id}`)

// 	feedbackModel.findByIdAndRemove(req.params.id, (err, doc) => {
// 		if (!err) { res.send(doc); }
// 		else { console.log('Error in feedback delete : ' + JSON.stringify(err, undefined, 2)); }
// 	});
// })


module.exports = router;