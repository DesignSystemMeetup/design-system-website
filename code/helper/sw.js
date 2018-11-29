const fs = require("fs");
const PKG = require("../../package.json");
const NAME = `"design-system-meetup-${PKG.version}"`;

let filesToCache = ['"/"']

function read(dir) {
	fs.readdir(dir, function(err, children) {
		if(children){
			children = children.filter(word => word !== 'CNAME');
			children.forEach(child => read(`${dir}/${child}`));
		}else{
			let item = dir.replace('docs', '').replace('/index.html', '');
			if(item !== ''){filesToCache.push(`"${item}"`)}
		}
	});
}

read('docs');

fs.readFile('code/assets/js/sw.template.js', 'utf8', function(err, template) {
	console.log('Service worker will cache these files...', filesToCache);
	let data = template;
	data = data.replace(/\$name/g, NAME);
	data = data.replace(/\$filesToCache/g, filesToCache);
	data = data.replace(/^\s*[\r\n]/gm, '');

	fs.writeFile("docs/assets/js/sw.min.js", data, function(err) {
		if (err) {
			return console.log(err);
		}
	});
});
