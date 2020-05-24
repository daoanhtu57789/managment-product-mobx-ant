import React, { Component } from "react";
import { Form, Input, Button } from "antd";
//kết nối vs store
import { inject, observer } from "mobx-react";
const ProductForm = observer(
  class ProductForm extends Component {
    formRef = React.createRef();

    onFinish = (values) => {
      this.props.ProductStore.deleteProduct(this.props.dataUpdate);
      this.props.ProductStore.addProduct(values);
      this.props.ProductStore.editProduct({});
      this.formRef.current.resetFields(); //làm rỗng các trường
    };

    onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    renderForm = () => {
      const layout = {
        labelCol: { span: 10 }, //khoảnh cách từ bên phải
        wrapperCol: { span: 4 }, //chiều dài
      };
      const tailLayout = {
        wrapperCol: { offset: 11, span: 16 },
      };
      let xhtml = null;

      if (this.props.dataUpdate.name) {
        const { dataUpdate } = this.props;
        this.formRef.current.setFieldsValue({
          name: dataUpdate.name ? dataUpdate.name : "",
          description: dataUpdate.description ? dataUpdate.description : "",
          price: dataUpdate.price ? dataUpdate.price : "",
          amount: dataUpdate.amount ? dataUpdate.amount : "",
        });
      }

      xhtml = (
        <Form
          {...layout}
          name="basic"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          ref={this.formRef}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>

          <Form.Item label="Price" name="price">
            <Input />
          </Form.Item>

          <Form.Item label="Amount" name="amount">
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );

      return xhtml;
    };
    render() {
      return <div>{this.renderForm()}</div>;
    }
  }
);

export default inject("ProductStore")(ProductForm);
