"use strict";
var path  = require('path');
var AdmZip = require('adm-zip');
var fse = require('fs-extra')
var zip = new AdmZip("./@BUILD.zip");
var dest = path.join(__dirname, "../../@BUILD");

fse.emptyDir(dest, err => {
	if (err)
		return console.error(err)

	zip.extractAllTo(dest, /*overwrite*/false);
})
