"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var MyWindow = /** @class */ (function () {
    function MyWindow() {
    }
    MyWindow.prototype.create = function () {
        var _this = this;
        this.mainWindow = new electron_1.BrowserWindow({ width: 800, height: 600 });
        this.mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, "./build/index.html"),
            protocol: "file:",
            slashes: true
        }));
        this.mainWindow.webContents.openDevTools();
        this.mainWindow.on("closed", function () {
            _this.mainWindow = null;
        });
    };
    MyWindow.prototype.start = function () {
        var _this = this;
        electron_1.app.on("ready", this.create);
        electron_1.app.on("window-all-closed", function () {
            if (process.platform !== "darwin") {
                electron_1.app.quit();
            }
        });
        electron_1.app.on("activate", function () {
            if (_this.mainWindow === null) {
                _this.create();
            }
        });
    };
    return MyWindow;
}());
exports.MyWindow = MyWindow;
var my = new MyWindow();
my.start();
