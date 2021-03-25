const db = require('../data/config');

const find = () => {
	return db('kenan');
};

const findById = id => {
	return db('kenan').where({ id }).first();
};

const create = async kenan => {
	const [id] = await db('kenan').insert(kenan);

	return findById(id);
};

const nuke = id => {
	return db('kenan').where({ id }).del();
};

module.exports = {
	find,
	findById,
	create,
	nuke
};