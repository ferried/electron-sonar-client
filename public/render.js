"use strict";
exports.__esModule = true;
var electron = require("electron");
var fs = require("fs");
var loadPackage = function (path) {
    var pkg = require(path);
    return pkg;
};
// tslint:disable-next-line: no-string-literal no-var-requires
global["electron"] = electron;
// tslint:disable-next-line: no-string-literal no-var-requires
global["fs"] = fs;
global["loadPackage"] = loadPackage;
