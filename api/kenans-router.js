const express = require('express');
const db = require('../data/config');
const Kenan = require('./kenans-model');
const { checkForValidID } = require('../middleware/kenans');
const router = express.Router();

// Family Meeting - get all the kenans
router.get('/', async (req, res, next) => {
	try {
		const kenans = await Kenan.find();
		res.json(Kenan);
	} catch (err) {
		next(err);
	}
});

// Get Kenan by ID
router.get('/:id', checkForValidID, async (req, res, next) => {
	try {
		const kenan = await Kenan.findById(req.params.id);
		res.json(kenan);
	} catch (err) {
		next(err);
	}
});

// Create a Kenan
router.post('/', async (req, res, next) => {
	try {
		const kenan = await Kenan.create(req.body);
		res.status(201).json(kenan);
	} catch (err) {
		next(err);
	}
});

//Delete A Kenan from the Family
router.delete('/:id', checkForValidID, async (req, res, next) => {
	try {
		await Kenan.nuke(req.params.id);
		res.json({message: 'In the bleak--'});
	} catch (err) {
		next(err);
	}
});
module.exports = router;