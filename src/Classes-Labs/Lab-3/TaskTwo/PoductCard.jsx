import React from "react";
import Counter from "../TaskOne/Counter";

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-card">
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>{product.description}</p>
        <span>{product.price} $ </span>
        <Counter />
        <button className="btn"> Add to Cart</button>
      </div>
    );
  }
}
export default ProductCard;
