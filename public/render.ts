import * as electron from "electron";
import * as fs from "fs";
const loadPackage = function(path: string) {
  const pkg = require(path);
  return pkg;
};

const exec = require("child_process").exec;
global["exec"] = exec;
global["electron"] = electron;
global["loadPackage"] = loadPackage;
global["fs"] = fs;
