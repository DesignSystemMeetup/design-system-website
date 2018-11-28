const fs = require("fs");
const PKG = require("../../package.json");
const NAME = `"design-system-meetup-${PKG.version}"`;

const filesToCacheOld = [
	'"/"',
	'"/assets/css/site.min.css"',
	'"/assets/img/atlassian.png"',
	'"/assets/img/dta.png"',
	'"/assets/img/expert360.png"',
	'"/assets/img/invision.png"',
	'"/assets/img/og-image.jpg"',
	'"/assets/img/thinkmill.png"',
	'"/assets/img/tomwalker.png"',
	'"/assets/img/zip.png"',
	'"/assets/js/script.min.js"',
	'"/assets/svg/sprite.svg"',
	'"/code-of-conduct"',
	'"/v1.0.0"',
	'"/v2.0.0"',
	'"/v3.0.0"',
	'"/v4.0.0"',
	'"/v5.0.0"'
];

let filesToCache = [
	'/'
]

const Wait = time => new Promise( resolve => setTimeout(() => resolve(), time) );


// read
// 	loop
// 	 isDir
// 	  read


function read(dir) {
	fs.readdir(dir, function(err, children) {

		console.log('children ', children);

		//clean up children


		filesToCache.concat(children);

		children.forEach(child => {
			read(`${dir}/${child}`)
		});
	});
}

read('docs');

fs.readdir('docs', function(err, dirs) {
	for (var i=0; i<dirs.length; i++) {
		filesToCache.push(dirs[i]);
	}
});

// fs.readdirsync('docs/assets/img', function(err, dirs) {
// 	for (var i=0; i<dirs.length; i++) {
// 		filesToCache.push(dirs[i]);
// 	}
// });

console.log(filesToCache);

fs.readFile('code/assets/js/sw.template.js', 'utf8', function(err, template) {
	let data = template;
	data = data.replace(/\$name/g, NAME);
	data = data.replace(/\$filesToCache/g, filesToCache);
	data = data.replace(/^\s*[\r\n]/gm, '');

	fs.writeFile("docs/assets/js/sw.min.js", data, function(err) {
		if (err) {
			return console.log(err);
		}
		console.log("Service Worker was built!");
	});
});
