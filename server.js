const express = require('express');
const cors = require('cors');
const kenansRouter = require('./api/kenans-router');
const server = express();

server.use(cors());
server.use(express.json());

server.use('/kenans', kenansRouter);

server.get('/', (req, res) => {
	res.json({
		message: 'Welcome to Kenan Inc.'
	});
});

server.use((err, res, req, next) => {
	console.log(err);
	res.status(500).json({message: 'ERRORRRR'});
});

module.exports = server;