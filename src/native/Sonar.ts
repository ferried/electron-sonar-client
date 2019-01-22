import { Mnotification } from "./Mnotification";
import AppState from "src/state/AppState";
import Package from "./Package";

export class Sonar {
  private pkg: Package;
  private state: AppState;
  constructor(state: AppState) {
    try {
      this.pkg = new Package(`${state.path}/package.json`);
      this.state = state;
      console.log(this.pkg);
    } catch (e) {
      new Mnotification("Error", e);
    }
  }

  installSonar(): void {
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
