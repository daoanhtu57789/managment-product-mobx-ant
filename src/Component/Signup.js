import React, { Component, Fragment } from "react";
import { Form, Input, Button } from "antd";
import { observer, inject } from "mobx-react";

const SignUp = observer(
  class SignUp extends Component {
    changeSignup = () => {
      this.props.RouterStore.changeLogin(true);
      this.props.RouterStore.changeSignup(false);
    };
    onFinish = (values) => {
      this.props.RouterStore.addUser(values);
    };

    onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    render() {
      const layout = {
        labelCol: { span: 10 }, //khoảnh cách từ bên phải
        wrapperCol: { span: 4 }, //chiều dài
      };
      const tailLayout = {
        wrapperCol: { offset: 11, span: 16 },
      };
      return (
        <Fragment>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            style={{ margin: "150px 0" }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                SignUp
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center", margin: "-150px 15px 0px 0px" }}>
            <small>
              You have an account ? Login{" "}
              <a onClick={this.changeSignup}>here</a>
            </small>
          </div>
        </Fragment>
      );
    }
  }
);

export default inject("RouterStore")(SignUp);
