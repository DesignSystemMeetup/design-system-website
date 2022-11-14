const { writeFile, readFile } = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const cfonts = require('cfonts');
const crypto = require('crypto');

const DB_FILE = 'db.json';
const PORT = 8877;

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

function write_to_db(id, data) {
	return new Promise((resolve, reject) => {
		readFile(DB_FILE, (error, db) => {
			if (error) {
				reject(error);
			}
			db = JSON.parse(db);

			if (!db[id]) {
				db[id] = [];
			}

			if (!db[id].filter(({ email }) => email === data).length) {
				db[id].push({email: data, hash: crypto.createHash('md5').update(data).digest("hex")});
			}

			writeFile(DB_FILE, JSON.stringify(db), (error) => {
				if (error) {
					reject(error);
				}

				resolve(db[id]);
			});
		});
	});
}

function read_from_db(id) {
	return new Promise((resolve, reject) => {
		readFile(DB_FILE, (error, db) => {
			if (error) {
				reject(error);
			}
			db = JSON.parse(db);

			resolve(db[id] || []);
		});
	});
}

server.post(`/join`, async (req, res) => {
	let { id, email } = req.body;

	if (!id || id.length === 0) {
		res.json({});
	} else {
		id = id ? id.substr(0,100) : '';
		email = email ? email.substr(0,100) : '';

		console.log(`↞  Write "${email}" to "${id}"`);

		const data = await write_to_db(id, email);
		res.json(data);
	}
});

server.get('/event/:id', async (req, res) => {
	const { id } = req.params;
	console.log(`↠  Get data from "${id}"`);

	const data = await read_from_db(id);
	res.json(data);
});


server.listen(PORT, () => {
	cfonts.say('server up', {
		font: 'chrome',
		align: 'center',
		colors: ['#ED2120', '#2D66FF', '#0A0F2B'],
		space: false,
	});
	cfonts.say(`Listening on localhost:${PORT}`, {
		font: 'console',
		align: 'center',
		colors: ['white'],
		space: false,
	});
});
