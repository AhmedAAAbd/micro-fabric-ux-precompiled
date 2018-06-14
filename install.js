"use strict";
var path  = require('path');
var AdmZip = require('adm-zip');
var zip = new AdmZip("./@BUILD.zip");
var dest = path.join(__dirname, "../../@BUILD");
zip.extractAllTo(dest, /*overwrite*/false);

