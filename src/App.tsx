import * as React from "react";
import { Form, Select, Button, Input, Row } from "antd";
import "./App.css";
import AppComponentProp from "./prop/AppProp";
import AppState from "./state/AppState";
import { Sonar } from "./native/Sonar";
import { Mnotification } from "./native/Mnotification";

const FormItem = Form.Item;
const { Option } = Select;
const App = Form.create()(
  class FormTest extends React.Component<AppComponentProp, AppState, any> {
    constructor(props: AppComponentProp) {
      super(props);
      this.state = {
        path: "E://",
        group: "yunzai",
        language: "ts",
        encoding: "utf-8",
        sonaruri: "http://192.168.102.128:9000",
        sonarsources: "src/app",
        exclusions: "**/node_modules/**,**/*.spec.ts",
        sonartests: "src/app",
        inclusions: "**/*.spec.ts",
        lint: "./tslint.json",
        loading: false,
        publish: false
      };
    }

    publish = (e: any) => {
      this.props.form.validateFields(async (err, values) => {
        new Mnotification(
          "Link Start!",
          "Now Publish Project,Please Wait A Moment"
        );
        this.setState({ publish: true });
        this.props.form.validateFields(async (err, values) => {
          if (!err) {
            const sonar: Sonar = new Sonar(values);
            const path = await sonar.checkPath();
            if (!path) {
              this.setState({ publish: false });
              return;
            }
            const pkg = await sonar.checkPkg();
            if (!pkg) {
              this.setState({ publish: false });
              return;
            }
            const install = await sonar.installSonar();
            if (!install) {
              this.setState({ publish: false });
              return;
            }
            const hasFile = await sonar.checkProp();
            if (!hasFile) {
              this.setState({ publish: false });
              return;
            }
            const publish = await sonar.publish();
            publish?this.setState({publish:false}):this.setState({publish:false});
          }
        });
      });
    };

    generateProperties = (e: any) => {
      new Mnotification("Link Start!", "Now Generating,Please Wait A Moment");
      this.setState({ loading: true });
      e.preventDefault();
      this.props.form.validateFields(async (err, values) => {
        if (!err) {
          const sonar: Sonar = new Sonar(values);
          const path = await sonar.checkPath();
          if (!path) {
            this.setState({ loading: false });
            return;
          }
          const pkg = await sonar.checkPkg();
          if (!pkg) {
            this.setState({ loading: false });
            return;
          }
          const install = await sonar.installSonar();
          if (!install) {
            this.setState({ loading: false });
            return;
          }
          const properties = await sonar.generateProperties();
          if (!properties) {
            this.setState({ loading: false });
            return;
          }
          this.setState({ loading: false });
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
          <Row type="flex" justify="center" align="top">
            <img src="sonar.png" />
          </Row>
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
                ],
                initialValue: this.state.path
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
                ],
                initialValue: this.state.group
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
                ],
                initialValue: this.state.encoding
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
                ],
                initialValue: this.state.sonaruri
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
                ],
                initialValue: this.state.sonarsources
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
                ],
                initialValue: this.state.exclusions
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
                ],
                initialValue: this.state.sonartests
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
                ],
                initialValue: this.state.inclusions
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
                ],
                initialValue: this.state.lint
              })(<Input />)}
            </FormItem>
            <FormItem {...formTailLayout}>
              <Button
                type="primary"
                size={"large"}
                loading={this.state.loading}
                htmlType="submit"
              >
                Generate Sonar Properties
              </Button>
            </FormItem>
            <FormItem {...formTailLayout}>
              <Button
                type="primary"
                size={"large"}
                onClick={this.publish}
                loading={this.state.publish}
              >
                Upload Project To Sonar Server
              </Button>
            </FormItem>
          </Form>
        </div>
      );
    }
  }
);

export default App;
