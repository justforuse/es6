var SystemJS = require("systemjs");

// console.log(SystemJS)
SystemJS.config({
	baseURL:"../es6/src",
	map: {
		'plugin-babel': '../es6/node_modules/systemjs-plugin-babel/plugin-babel.js',
		'systemjs-babel-build': '../es6/node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
	},
	transpiler: 'plugin-babel'
})
SystemJS.import("../es6/src/Module/info.js").then(function(r) {
	console.log(r);
}, function(e) {
	console.log(e);
})
