import { Mnotification } from "./Mnotification";
import AppState from "src/state/AppState";
import Package from "./Package";

export class Sonar {
  private pkg: Package;
  constructor(state: AppState) {
    try {
      this.pkg = new Package(`${state.path}/package.json`);
    } catch (e) {
      new Mnotification("Error", e);
    }
  }
  generateProperties(): void {
    console.log(this.pkg);
  }
}
