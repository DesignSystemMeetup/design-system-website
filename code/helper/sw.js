const fs = require('fs');
const path = require('path');
const PKG = require('../../package.json');

const NAME = `'design-system-meetup-${PKG.version}'`;

const isDirectory = (dir, file) => fs.statSync(path.join(dir, file)).isDirectory();

const listFilesInFolder = (dir, root) => {
	root = root || dir;
	let files = [];

	fs
		.readdirSync(dir)
		.filter(file =>
			!file.startsWith('.') &&
			file !== 'CNAME' &&
			file !== 'sw.min.js' &&
			file !== 'sw.template.js'
		)
		.forEach(file => {
			if (!isDirectory(dir, file)) {
				const subPath = `${dir}/${file.replace('index.html', '')}`;
				const filePath = path.relative(root, subPath);
				const ext = fs.statSync(subPath).isDirectory() ? '/' : '';
				files.push(JSON.stringify(`${filePath}${ext}`));
			}
			else {
				files = [...files, ...listFilesInFolder(`${dir}/${file}`, root)];
			}
		}
		);
	return files;
};

const getTemplateText = (NAME, filesToCache) => {
	return new Promise((resolve, reject) => {
		try {
			fs.readFile('code/assets/js/sw.template.js', 'utf8', (err, template) => {
				const file = template
					.replace(/\{\{NAME\}\}/g, NAME)
					.replace(/\$filesToCache/g, filesToCache)
					.replace(/^\s*[\r\n]/gm, '');
				resolve(file);
			});
		}
		catch (error) {
			reject(error);
		}
	});
};

const filesToCache = listFilesInFolder('docs')

getTemplateText(NAME, filesToCache)
	.then(file => {
		fs.writeFile('docs/sw.min.js', file, error => {
			if (error) console.log(error);
		});
	})
	.catch(error => console.log(error));
