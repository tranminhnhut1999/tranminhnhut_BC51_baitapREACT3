import React, { Component } from "react";
import data from "../data/data.json";
import Shoe from "./Shoe";
import GioHang from "./GioHang";

export default class ShoeShop extends Component {
  renderShoeList = () => {
    return data.map((element, idx) => {
      return (
        <div key={idx} className="col-4">
          <Shoe showDescription={this.showDescription} element={element} />
        </div>
      );
    });
  };

  showDescription = (description) => {
    alert(description);
  };

  render() {
    return (
      <section className="row">
        <GioHang />
        {this.renderShoeList()}
      </section>
    );
  }
}
