import { Mnotification } from "./Mnotification";
import AppState from "src/state/AppState";
import Package from "./Package";

export class Sonar {
  private exec = global["exec"];
  private pkg: Package;
  private state: AppState;
  constructor(state: AppState) {
    this.state = state;
  }

  checkPath(): boolean {
    const cmd = `cd ${this.state.path}`;
    return this.exec(cmd, (error: any, stdout: any, stderr: any) => {
      if (error) {
        new Mnotification("Error", "Not Found File");
        return false;
      } else {
        return true;
      }
    });
  }

  checkPkg(): boolean {
    try {
      this.pkg = new Package(`${this.state.path}/package.json`);
      console.log(this.pkg);
      return true;
    } catch (e) {
      new Mnotification(
        "Error",
        `Not Found Package.json in ${this.state.path}`
      );
      return false;
    }
  }

  installSonar(): void {
    if (this.checkPath() && this.checkPkg()) {
      new Mnotification("Npm", "Now installing sonar-scanner");
      const exec = global["exec"];
      const cmd = `cd ${this.state.path} && npm install --save sonar-scanner`;
      exec(cmd, (error: any, stdout: any, stderr: any) => {
        if (error) {
          console.log(error);
        } else {
          new Mnotification("Npm Install End", stdout);
        }
      });
    }
  }

  generateProperties(): void {}
}
