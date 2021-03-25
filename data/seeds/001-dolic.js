exports.seed = async function (knex) {
	await knex('kenans').truncate();
	await knex('kenans').insert([
		{ name: 'Kenan Dolic' },
		{ name: 'Kenan2 Dolic' },
		{ name: 'Kenan3 Dolic' },
		{ name: 'Kenan4 Dolic' }
	]);
};