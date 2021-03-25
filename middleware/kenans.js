const Kenan = require('../api/kenans-model');

const checkForValidID = async (req, res, next) => {
	const { id } = req.params;
	const kenan = await Kenan.findById(id);
	if (!kenan) {
		return res.status(404).json({message: 'Kenan not found.'});
	}
	next();
};

module.exports = {
	checkForValidID
};