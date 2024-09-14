import { products } from "./ProductData";
import ProductCard from "./ProductCard";
import { useState } from "react";
function Products() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
  });
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.category || !newProduct.description || !newProduct.price) return;
    products.push(newProduct);
    setNewProduct({
      name: "",
      category: "",
      description: "",
      price: "",
    });
  };
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <form className="product-card flex-start" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Product Name" name="name" value={newProduct.name} onChange={handleChange} />
        <input type="text" placeholder="Product category" name="category" value={newProduct.category} onChange={handleChange} />
        <input type="text" placeholder="Product Description" name="description" value={newProduct.description} onChange={handleChange} />
        <input type="number" placeholder="Product price" name="price" value={newProduct.price} onChange={handleChange} />
        <button className="btn"> Create New Product</button>
      </form>
    </div>
  );
}
export default Products;
