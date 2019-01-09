"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
// tslint:disable-next-line: no-var-requires
var pkg = require("./package.json");
var MyWindow = /** @class */ (function () {
    function MyWindow() {
    }
    MyWindow.prototype.create = function () {
        var _this = this;
        this.mainWindow = new electron_1.BrowserWindow({
            autoHideMenuBar: true,
            fullscreenable: false,
            height: 600,
            width: 800,
            // tslint:disable-next-line: object-literal-sort-keys
            webPreferences: {
                javascript: true,
                plugins: true,
                // tslint:disable-next-line: object-literal-sort-keys
                nodeIntegration: false,
                webSecurity: false,
                preload: path.join(__dirname, "./public/render.js") // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
            }
        });
        if (pkg.DEV) {
            this.mainWindow.loadURL("http://localhost:3000");
        }
        else {
            this.mainWindow.loadURL(url.format({
                pathname: path.join(__dirname, "./build/index.html"),
                protocol: "file:",
                slashes: true
            }));
        }
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
