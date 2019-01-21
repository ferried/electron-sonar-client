import * as React from "react";
import "./App.css";

// const electron = global["electron"];
// const fs = global["fs"];
const pkg: any = global["pkg"];
class App extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      project: {
        projectName: `${pkg.name}`,
        group: "yunzai",
        language: "ts",
        version: `${pkg.version}`,
        encoding: "utf-8",
        sonaruri: "http://192.168.102.128:9000",
        sonarsources: "src",
        exclusions: "**/node_modules/**,**/*.spec.ts",
        sonartests: "src/app",
        inclusions: "**/*.spec.ts",
        tslint: "tslint.json"
      }
    };
    console.log(this.state);
  }

  public render() {
    return <div />;
  }
}

export default App;
