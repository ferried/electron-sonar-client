import * as React from "react";
import { Form, Select, Button } from "antd";
import "./App.css";
import Package from "./native/Package";
import AppComponentProp from "./prop/AppProp";
import AppState from "./state/AppState";
// const electron = global["electron"];
// const fs = global["fs"];

const FormItem = Form.Item;
const { Option } = Select;
const App = Form.create()(
  class FormTest extends React.Component<AppComponentProp, AppState, any> {
    constructor(props: AppComponentProp) {
      super(props);
      this.state = {
        projectName: "project",
        group: "yunzai",
        language: "ts",
        version: "0.0.0-alpha",
        encoding: "utf-8",
        sonaruri: "http://192.168.102.128:9000",
        sonarsources: "src/app",
        exclusions: "**/node_modules/**,**/*.spec.ts",
        sonartests: "src/app",
        inclusions: "**/*.spec.ts",
        lint: "tslint.json",
        loading: false
      };
    }

    generateProperties = (e: any) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    };

    public render() {
      const getFieldDecorator = this.props.form.getFieldDecorator;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      };
      const formTailLayout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 8, offset: 9 }
      };
      const selectDatas = [
        { value: "ts", label: "typescript" },
        { value: "js", label: "javascript" }
      ];

      return (
        <Form onSubmit={this.generateProperties}>
          <FormItem
            {...formItemLayout}
            label="Language"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("language", {
              rules: [{ required: true, message: "please select a language" }],
              initialValue: "ts"
            })(
              <Select placeholder="please select a language">
                {(function() {
                  return selectDatas.map(item => {
                    return (
                      <Option key={item.value} value={item.value}>
                        {item.label}
                      </Option>
                    );
                  });
                })()}
              </Select>
            )}
          </FormItem>
          <FormItem {...formTailLayout}>
            <Button type="primary" size={"large"} htmlType="submit">
              Generate Sonar Properties
            </Button>
          </FormItem>
        </Form>
      );
    }
  }
);

export default App;
