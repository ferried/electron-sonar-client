import * as React from "react";
import { Form, Icon, Input } from "antd";
import "./App.css";
import { FormComponentProps } from "antd/lib/form";
// const electron = global["electron"];
// const fs = global["fs"];
const pkg: any = global["pkg"];
const FormItem = Form.Item;
interface AppComponentProp extends FormComponentProps {}
interface AppState {
  projectName: string;
  group: string;
  language: string;
  version: string;
  encoding: string;
  sonaruri: string;
  sonarsources: string;
  exclusions: string;
  sonartests: string;
  inclusions: string;
  tslint: string;
}
const App = Form.create()(
  class FormTest extends React.Component<AppComponentProp, AppState, any> {
    constructor(props: AppComponentProp) {
      super(props);
      this.state = {
        projectName: pkg.name,
        group: "yunzai",
        language: "ts",
        version: pkg.version,
        encoding: "utf-8",
        sonaruri: "http://192.168.102.128:9000",
        sonarsources: "src/app",
        exclusions: "**/node_modules/**,**/*.spec.ts",
        sonartests: "src/app",
        inclusions: "**/*.spec.ts",
        tslint: "tslint.json"
      };
    }

    generateProperties = (e: any) => {};

    public render() {
      const getFieldDecorator = this.props.form.getFieldDecorator;

      return (
        <Form onSubmit={this.generateProperties}>
          <FormItem>
            {getFieldDecorator("username", {})(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>
        </Form>
      );
    }
  }
);

export default App;
