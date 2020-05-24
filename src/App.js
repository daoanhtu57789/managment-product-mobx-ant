import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { observer, inject } from "mobx-react";
import { Button } from "antd";
//component
import ProductList from "./Component/ProductList";
import ProductForm from "./Component/ProductForm";
import Login from "./Component/Login";
import SignUp from "./Component/Signup";

const App = observer(
  class App extends Component {
    changeContent = () => {
      this.props.RouterStore.changeLogin(true);

      this.props.RouterStore.changeContent(false);
    };
    render() {
      return (
        <div>
          {this.props.RouterStore.getContent ? (
            <div>
              <Button type="primary" onClick={this.changeContent}>
                Logout
              </Button>{" "}
              <h2 className="title">
                <strong>Thêm Thông Tin Sản Phẩm.</strong>
              </h2>
              <ProductForm dataUpdate={this.props.ProductStore.getEditing} />
              <h2 className="title">
                <strong>Danh Sách Sản Phẩm.</strong>
              </h2>
              <ProductList />
            </div>
          ) : (
            ""
          )}

          {this.props.RouterStore.getLogin ? (
            <div>
              {" "}
              <Login />
            </div>
          ) : (
            ""
          )}

          {this.props.RouterStore.getSignup ? (
            <div>
              {" "}
              <SignUp />
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
  }
);

export default inject("RouterStore", "ProductStore")(App);
