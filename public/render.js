"use strict";
exports.__esModule = true;
var electron = require("electron");
var fs = require("fs");
var pkg = require("../package.json");
// tslint:disable-next-line: no-string-literal no-var-requires
global["electron"] = electron;
// tslint:disable-next-line: no-string-literal no-var-requires
global["fs"] = fs;
global["pkg"] = pkg;
