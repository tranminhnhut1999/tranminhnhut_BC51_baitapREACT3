import React, { Component } from "react";

export default class Shoe extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.element.image}
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.element.name}</h4>
          <button
            onClick={() =>
              this.props.showDescription(this.props.element.description)
            }
            className="btn btn-dark"
          >
            SHOW DESCRIPTION
          </button>
          <button
            onClick={() => this.props.addToCart(this.props.element)}
            className="btn btn-success"
          >
            THÊM GIỎ HÀNG
          </button>
        </div>
      </div>
    );
  }
}
