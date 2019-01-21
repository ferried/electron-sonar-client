
import * as electron from 'electron';
import * as fs from 'fs';
const pkg = require("../package.json");
// tslint:disable-next-line: no-string-literal no-var-requires
global["electron"] = electron;
// tslint:disable-next-line: no-string-literal no-var-requires
global["fs"] = fs;
global["pkg"] = pkg;