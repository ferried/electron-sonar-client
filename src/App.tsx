import * as React from "react";
import { Form, Select, Button, Input } from "antd";
import "./App.css";
// import Package from "./native/Package";
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
        path: null,
        projectName: null,
        group: "yunzai",
        language: "ts",
        projectVersion: "0.0.0-alpha",
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
        <div style={{ backgroundColor: "rgb(249,249,251)" }}>
          <img src="sonar.png" />
          <Form onSubmit={this.generateProperties}>
            <FormItem
              {...formItemLayout}
              label="Language"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("language", {
                rules: [
                  { required: true, message: "please select a language" }
                ],
                initialValue: this.state.language
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
            <FormItem
              {...formItemLayout}
              label="Path"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("path", {
                rules: [
                  {
                    required: true,
                    message: "Please input project path!"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="ProjectName"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("projectName", {
                rules: [
                  {
                    required: true,
                    message: "Please input project name!"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Version"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("projectVersion", {
                rules: [
                  {
                    required: true,
                    message: "Please input project version"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Group"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("group", {
                rules: [
                  {
                    required: true,
                    message: "Please input project group!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Encoding"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("encoding", {
                rules: [
                  {
                    required: true,
                    message: "Please input project encoding!"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Sonaruri"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("sonaruri", {
                rules: [
                  {
                    required: true,
                    message: "Please input sonar server url!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="SonarSources"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("sonarsources", {
                rules: [
                  {
                    required: true,
                    message: "Please input scan path!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Exclusions"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("exclusions", {
                rules: [
                  {
                    required: true,
                    message: "Please input ignore scan path!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="SonarTests"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("sonartests", {
                rules: [
                  {
                    required: true,
                    message: "Please input test path!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Inclusions"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("inclusions", {
                rules: [
                  {
                    required: true,
                    message: "Please input test include path!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Lint"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("lint", {
                rules: [
                  {
                    required: true,
                    message: "Please input tslint/eslint path!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formTailLayout}>
              <Button type="primary" size={"large"} htmlType="submit">
                Generate Sonar Properties
              </Button>
            </FormItem>
          </Form>
        </div>
      );
    }
  }
);

export default App;
