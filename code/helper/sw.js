const fs = require("fs");
const path = require("path");
const PKG = require("../../package.json");
const NAME = `"design-system-meetup-${PKG.version}"`;

let filesToCache = ['"/"']

function read(dir) {
	fs.readdirSync(dir).forEach(child => {
		// if child is a file
		if(path.extname(child)){
			let item = `${dir.replace('docs', '')}/${child.replace('/index.html', '')}`;
			if(item !== ''){filesToCache.push(`"${item}"`)}
		//otherwise it's a folder
		}else if(!child.includes('CNAME')){
			read(`${dir}/${child}`);
		}
	})
}

read('docs');

fs.readFile('code/assets/js/sw.template.js', 'utf8', function(err, template) {
	//console.log('Service worker will cache these files...', filesToCache);
	let file = template
		.replace(/\$name/g, NAME)
		.replace(/\$filesToCache/g, filesToCache)
		.replace(/^\s*[\r\n]/gm, '');

	fs.writeFile("docs/assets/js/sw.min.js", file, function(err) {
		if (err) {return console.log(err)}
	});
});
