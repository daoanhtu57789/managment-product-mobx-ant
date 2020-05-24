import React, { Component } from "react";
//ant
import { Table, Space, Button } from "antd";
//kết nối vs store
import { inject, observer } from "mobx-react";

const ProductList = observer(
  class ProductList extends Component {
    handleDelete = (record) => {
      this.props.ProductStore.deleteProduct(record);
    };

    handleEdit = (record) => {
      this.props.ProductStore.editProduct(record);
    };
    render() {
      const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          align: "center",
          render: (text) => <span>{text}</span>,
        },
        {
          title: "Description",
          dataIndex: "description",
          key: "description",
          align: "center",
        },
        {
          title: "Price",
          dataIndex: "price",
          key: "price",
          align: "center",
          render: (text) => <span>{text} VNĐ</span>,
        },
        {
          title: "Amount",
          key: "amount",
          dataIndex: "amount",
          align: "center",
          render: (text) => (
            <span>
              <Button type="primary">-</Button>
              <strong
                style={{
                  margin: "0 10px",
                  color: `${+text > 0 ? "blue" : "red"}`,
                }}
              >
                {+text > 0 ? text : "Hết Hàng"}
              </strong>
              <Button type="primary">+</Button>
            </span>
          ),
        },
        {
          title: "Action",
          key: "action",
          render: (
            text,
            record //record ở đây là cả object
          ) => (
            <Space size="middle">
              <Button type="primary" onClick={() => this.handleEdit(record)}>
                Edit
              </Button>
              <Button
                type="primary"
                onClick={() => this.handleDelete(record)}
                danger
              >
                Delete
              </Button>
            </Space>
          ),
        },
      ];

      let data = [];
      this.props.ProductStore.getProducts.map((product, index) =>
        data.push({
          key: index,
          name: product.name,
          description: product.description,
          price: product.price,
          amount: product.amount,
        })
      );

      return <Table columns={columns} dataSource={data} />;
    }
  }
);

export default inject("ProductStore")(ProductList);
