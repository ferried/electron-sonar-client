var loadPackage = function(path) {
  var pkg = require(path);
  return pkg;
};
var electron = require('electron');
var fs = require('fs');
var exec = require("child_process").exec;
global["exec"] = exec;
global["electron"] = electron;
global["loadPackage"] = loadPackage;
global["fs"] = fs;