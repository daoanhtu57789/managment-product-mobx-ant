import React, { Component, Fragment } from "react";
import { Form, Input, Button } from "antd";
import { observer, inject } from "mobx-react";
const Login = observer(
  class Login extends Component {
    changeLogin = () => {
      this.props.RouterStore.changeLogin(false);
      this.props.RouterStore.changeSignup(true);
    };
    onFinish = (values) => {
      const user = this.props.RouterStore.getListUser.filter(
        (user) =>
          user.username === values.username && user.password === values.password
      );

      if (user.length === 1) {
        this.props.RouterStore.changeLogin(false);
        this.props.RouterStore.changeSignup(false);
        this.props.RouterStore.changeContent(true);
      } else {
        alert("Sai Thông Tin Đăng Nhập.");
      }
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
                Login
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center", margin: "-150px 15px 0px 0px" }}>
            <small>
              You don't have an account ? sign up{" "}
              <a onClick={this.changeLogin}>here</a>
            </small>
          </div>
        </Fragment>
      );
    }
  }
);

export default inject("RouterStore")(Login);
