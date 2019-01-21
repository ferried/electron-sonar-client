import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";
// tslint:disable-next-line: no-var-requires
const pkg = require("./package.json");
export class MyWindow {
  private mainWindow: BrowserWindow | null;
  public create(): void {
    this.mainWindow = new BrowserWindow({
      autoHideMenuBar: true,
      fullscreenable: false,
      height: 600,
      width: 800,
      // tslint:disable-next-line: object-literal-sort-keys
      webPreferences: {
        javascript: true,
        plugins: true,
        // tslint:disable-next-line: object-literal-sort-keys
        nodeIntegration: false, // 不集成 Nodejs
        webSecurity: false,
        preload: path.join(__dirname, "./public/render.js") // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
      }
    });
    if (pkg.DEV) {
      this.mainWindow.loadURL("http://localhost:3000");
    } else {
      this.mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, "./build/index.html"),
          protocol: "file:",
          slashes: true
        })
      );
    }
    this.mainWindow.webContents.openDevTools();
    this.mainWindow.on("closed", () => {
      this.mainWindow = null;
    });
  }

  public start(): void {
    app.commandLine.appendSwitch("--disable-http-cache");
    app.on("ready", this.create);
    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        app.quit();
      }
    });
    app.on("activate", () => {
      if (this.mainWindow === null) {
        this.create();
      }
    });
  }
}

const my: MyWindow = new MyWindow();
my.start();
