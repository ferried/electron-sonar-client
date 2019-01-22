import { Mnotification } from "./Mnotification";
import AppState from "src/state/AppState";
import Package from "./Package";

export class Sonar {
  private exec = global["exec"];
  private fs = global["fs"];
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
          new Mnotification("Check File Error", "Not Found File");
          resolve(false);
        }
      });
    });
    return temp;
  };

  checkPkg = async () => {
    try {
      this.pkg = new Package(`${this.state.path}/package.json`);
      return true;
    } catch (e) {
      new Mnotification(
        "Check Package Error",
        `Not Found Package.json in ${this.state.path}`
      );
      return false;
    }
  };

  installSonar = async () => {
    return new Promise(async (resolve, rejects) => {
      const cmd = `cd ${this.state.path} && npm install --save sonar-scanner`;
      await this.exec(cmd, (error: any, stdout: any, stderr: any) => {
        if (error) {
          new Mnotification("Npm Install Error", error);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  };

  generateProperties = async () => {
    const propertiesText = `sonar.projectKey=${this.state.group}:${
      this.pkg.name
    }\nsonar.projectName=${this.pkg.name}\nsonar.projectVersion=${
      this.pkg.version
    }\nsonar.sources=${this.state.sonarsources}\nsonar.language=${
      this.state.language
    }\nsonar.sourceEncoding=${this.state.encoding}\nsonar.host.url=${
      this.state.sonaruri
    }\nsonar.exclusions=${this.state.exclusions}\nsonar.tests=${
      this.state.sonartests
    }\nsonar.test.inclusions=${
      this.state.inclusions
    }\nsonar.ts.tslint.configPath=${this.state.lint}`;
    this.fs.writeFileSync(
      `${this.state.path}/sonar-project.properties`,
      propertiesText
        .toString()
        .trim()
        .trimLeft()
        .trimRight(),
      (error: any) => {
        new Mnotification("Generate Properties Error", error);
        return false;
      }
    );
    return true;
  };

  publish = async () => {};
}
