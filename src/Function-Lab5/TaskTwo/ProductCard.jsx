import Counter from "./Counter";
function ProductCard({ product }) {
  const { img, name, category, description, price } = product;
  return (
    <div className="product-card">
      {img && <img src={img} alt={name} />}
      <h3>{name}</h3>
      <span>{category}</span>
      <p>{description}</p>
      <span>{price} $ </span>
      <Counter />
      <button className="btn"> Add to Cart</button>
    </div>
  );
}
export default ProductCard;
