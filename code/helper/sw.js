const fs = require('fs');
const path = require('path');
const minify = require("babel-minify");
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
	let template = fs
		.readFileSync('code/assets/js/sw.template.js', 'utf8')
		.replace(/\{\{NAME\}\}/g, NAME)
		.replace(/\{\{FILES\}\}/g, filesToCache);

	let minified = minify(template);
	return minified.code;
};

const filesToCache = listFilesInFolder('docs')
const sw_file = getTemplateText(NAME, filesToCache);

fs.writeFileSync('docs/sw.min.js', sw_file, error => {if (error) console.log(error);});
