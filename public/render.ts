import * as electron from "electron";
import * as fs from "fs";

const loadPackage = function(path: string) {
  const pkg = require(path);
  return pkg;
};

// tslint:disable-next-line: no-string-literal no-var-requires
global["electron"] = electron;
// tslint:disable-next-line: no-string-literal no-var-requires
global["fs"] = fs;
global["loadPackage"] = loadPackage;
