import { Button, Col } from "antd";
import { Row } from "antd";
import { Input } from "antd";
import { Select } from "antd";
import * as React from "react";
import "./App.css";

// tslint:disable-next-line: no-string-literal no-var-requires
const electron = global["electron"];
// tslint:disable-next-line: no-string-literal no-var-requires
const fs = global["fs"];
const Option = Select.Option;
class App extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      project: {
        type: "typescript"
      }
    };
  }

  generatePropertie = () => {
    console.log(this.state);
  };

  public render() {
    console.log(fs);
    console.log(electron.remote);
    const notification = new electron.remote.Notification({
      body: "this is an message body",
      title: "this is an message title"
    });
    notification.show();
    return (
      <div className="App" style={{ backgroundColor: "rgb(249, 249, 251)" }}>
        <Row type="flex" justify="center">
          <img src="sonar.png" />
          <div style={{ marginTop: "1%" }}>
            <Col span={24} push={6}>
              <Select defaultValue="typescript">
                <Option value="javascript">javascript</Option>
                <Option value="typescript">typescript</Option>
              </Select>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input addonBefore="项目目录" defaultValue="" />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input addonBefore="组织" defaultValue="" />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input addonBefore="项目名称" defaultValue="" />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input addonBefore="项目版本" defaultValue="" />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input addonBefore="编码" defaultValue="UTF-8" />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input addonBefore="源目录" defaultValue="src/app" />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input
                  addonBefore="排除文件"
                  defaultValue="**/node_modules/**,**/*.spec.ts"
                />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input addonBefore="测试目录" defaultValue="src/test" />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input addonBefore="测试后缀" defaultValue="**/*.spec.ts" />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input addonBefore="Lint路径" defaultValue="eslint/tslint" />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div style={{ width: "50%", marginTop: "10px" }}>
                <Input
                  addonBefore="Sonar地址"
                  defaultValue="http://localhost:8080"
                />
              </div>
            </Col>
            <Col span={24} push={6}>
              <div
                style={{
                  width: "50%",
                  marginTop: "20px",
                  marginBottom: "20px"
                }}
              >
                <Button
                  type="primary"
                  block={true}
                  onClick={this.generatePropertie}
                >
                  生成
                </Button>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default App;
