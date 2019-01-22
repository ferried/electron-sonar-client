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

  checkPath = async () => {
    const temp = new Promise(async (resolve, rejects) => {
      const cmd = `cd ${this.state.path}`;
      await this.exec(cmd, (error: any, stdout: any, stderr: any) => {
        if (!error) {
          resolve(true);
        } else {
          new Mnotification("Error", "Not Found File");
          resolve(false);
        }
      });
    });
    return temp;
  };

  checkPkg = async () => {
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
  };

  installSonar = async () => {
    const exec = global["exec"];
    return new Promise(async (resolve, rejects) => {
      const cmd = `cd ${this.state.path} && npm install --save sonar-scanner`;
      await exec(cmd, (error: any, stdout: any, stderr: any) => {
        if (error) {
          new Mnotification("Npm Install Error", error);
          resolve(false);
        } else {
          new Mnotification("Npm Install Success", stdout);
          resolve(true);
        }
      });
    });
  };

  generateProperties = async () => {
    if (global["fs"]) {
      const fs = global["fs"];
      console.log(fs);
      return true;
    } else {
      return false;
    }
  };
}
