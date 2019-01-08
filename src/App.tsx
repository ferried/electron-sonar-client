import { Col } from "antd";
import { Row } from "antd";
import { Input } from "antd";
import { Select } from "antd";
import * as React from "react";
import "./App.css";

const Option = Select.Option;
class App extends React.Component {
  public render() {
    return (
      <div className="App" style={{ backgroundColor: "rgb(249, 249, 251)" }}>
        <Row type="flex" justify="center">
        <img src="sonar.png"/>
          <div style={{ marginTop: "5%" }}>
            <Col span={24} push={6}>
              <Select defaultValue="typescript">
                <Option value="javascript">javascript</Option>
                <Option value="typescript">typescript</Option>
              </Select>
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
                  addonBefore="排除后缀"
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
          </div>
        </Row>
      </div>
    );
  }
}

export default App;
