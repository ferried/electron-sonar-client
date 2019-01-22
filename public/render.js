"use strict";
exports.__esModule = true;
var electron = require("electron");
var fs = require("fs");
var loadPackage = function (path) {
    var pkg = require(path);
    return pkg;
};
global["electron"] = electron;
global["fs"] = fs;
global["loadPackage"] = loadPackage;
