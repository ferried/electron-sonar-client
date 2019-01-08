import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

export class MyWindow {
  private mainWindow: BrowserWindow | null;
  public create(): void {
    this.mainWindow = new BrowserWindow({ width: 800, height: 600 });
    this.mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "./build/index.html"),
        protocol: "file:",
        slashes: true
      })
    );
    this.mainWindow.webContents.openDevTools();
    this.mainWindow.on("closed", () => {
      this.mainWindow = null;
    });
  }

  public start(): void {
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
