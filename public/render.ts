import * as electron from "electron";
import * as fs from "fs";

const loadPackage = function(path: string) {
  const pkg = require(path);
  return pkg;
};

global["electron"] = electron;
global["fs"] = fs;
global["loadPackage"] = loadPackage;
