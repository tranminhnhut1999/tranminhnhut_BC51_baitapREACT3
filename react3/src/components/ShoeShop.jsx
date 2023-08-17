import React, { Component } from "react";
import data from "../data/data.json";
import Shoe from "./Shoe";

export default class ShoeShop extends Component {
  renderShoeList = () => {
    return data.map((element, idx) => {
      return (
        <div key={idx} className="col-2">
          <Shoe showDescription={this.showDescription} element={element} />
        </div>
      );
    });
  };

  showDescription = (description) => {
    alert(description);
  };

  render() {
    return <div className="row">{this.renderShoeList()}</div>;
  }
}
