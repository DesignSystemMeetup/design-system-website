const { writeFile, readFile } = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const cfonts = require('cfonts');
const crypto = require('crypto');
const path = require('path');

const DB_FILE = path.normalize(`${__dirname}/db.json`);
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
			} else {
				db = JSON.parse(db);

				if (db[id]) {
					const result = db[id].map(({email,hash}) => {
						const bits = email.split("@");
						return {
							email: `${bits[0].substr(0,2)}***@***${bits[1].substr(-5)}`,
							hash,
						};
					});

					resolve(result || []);
				} else {
					resolve([]);
				}
			}
		});
	});
}

server.post(`/dsm/join`, async (req, res) => {
	let { id, email } = req.body;

	if (!id || id.length === 0) {
		res.json({});
	} else {
		id = id ? id.substr(0,100) : '';
		email = email ? email.substr(0,100) : '';

		console.log(`↞  Write "${email}" to "${id}"`);

		await write_to_db(id, email);
		res.redirect(302, 'https://designsystemmeetup.com/');
	}
});

server.get('/dsm/event/:id', async (req, res) => {
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
