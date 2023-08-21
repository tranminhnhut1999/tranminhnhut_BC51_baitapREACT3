import React, { Component } from "react";
import data from "../data/data.json";
import Shoe from "./Shoe";
import GioHang from "./GioHang";

export default class ShoeShop extends Component {
  state = {
    shoeDetail: data[0],
    cartList: [],
  };

  handleRemove = (id) => {
    const result = window.confirm("Bạn có muốn xoá không?");

    if (result) {
      this.setState({
        cartList: this.state.cartList.filter((element) => element.id !== id),
      });
    }
  };

  handleQuantity = (id, isIncrease) => {
    const data = [...this.state.cartList];

    const index = data.findIndex((element) => {
      return element.id === id;
    });
    if (isIncrease) {
      data[index].soLuong += 1;
    } else {
      if (data[index].soLuong === 1) {
        const result = window.confirm("Bạn có muốn xoá không?");

        if (result) {
          data.splice(index, 1);
        } else {
        }
      } else {
        data[index].soLuong -= 1;
      }
    }

    this.setState({
      cartList: data,
    });
  };

  addToCart = (Shoe) => {
    // console.log(Shoe);
    const data = [...this.state.cartList];

    const index = data.findIndex((element) => {
      return element.id === Shoe.id;
    });
    if (index !== -1) {
      data[index].soluong += 1;
    } else {
      data.push({ ...Shoe, soLuong: 1 });
    }

    this.setState({
      cartList: data,
    });
  };

  getShoeDetail = (Shoe) => {
    this.setState({
      shoeDetail: Shoe,
    });
  };

  renderShoeList = () => {
    return data.map((element, idx) => {
      return (
        <div key={idx} className="col-4">
          <Shoe
            addToCart={this.addToCart}
            data={data}
            showDescription={this.showDescription}
            element={element}
          />
        </div>
      );
    });
  };

  showDescription = (description) => {
    alert(description);
  };

  render() {
    return (
      <section className="row ">
        <GioHang
          handleRemove={this.handleRemove}
          handleQuantity={this.handleQuantity}
          cartList={this.state.cartList}
        />
        <div className="row">{this.renderShoeList()}</div>
      </section>
    );
  }
}
