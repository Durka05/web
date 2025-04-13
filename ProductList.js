import React, { useState } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [favorites, setFavorites] = useState([]);
  const [category, setCategory] = useState("All");

  // Sample product data
  const products = [
    { id: 1, name: "iPhone X", category: "Electronics", price: 25000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRi5NolS86n1zZMjITGI3BihCvimXu7DpfLVcVUYdqZzKTrhoxi-Lh9C5YLvQmlB7Qs94&usqp=CAU" },
    { id: 2, name: "Sofa Set", category: "Furniture", price: 12000, image:"https://www.lakdi.com/cdn/shop/files/L_Shape_Suede_Fabric_6_Seater_Sofa_Set_Luxury_Furniture_with_Solid_Wood_Frame_-_-3759327.jpg?v=1742459071" },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 500, image: "https://thebanyantee.com/cdn/shop/files/Beige-T-shirt_a3897414-6101-466a-b6bc-18b5e24c2c7e.jpg?v=1721381182&width=1920" },
  ];

  // Filter products by category
  const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);

  // Add to Favorites
  const addToFavorites = (product) => {
    if (!favorites.some(fav => fav.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  // Remove from Favorites
  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter((fav) => fav.id !== productId));
  };

  return (
    <div className="product-container">
      <h2>Product Listings</h2>

      {/* Category Filter */}
      <select onChange={(e) => setCategory(e.target.value)} className="filter-dropdown">
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
      </select>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price}</p>
              <button onClick={() => addToFavorites(product)}>Add to Favorites</button>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      {/* Favorite Items */}
      <h2>Favorites</h2>
      <div className="favorite-list">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <div key={fav.id} className="product-card">
              <img src={fav.image} alt={fav.name} className="product-img" />
              <h3>{fav.name}</h3>
              <p>₹{fav.price}</p>
              <button className="remove-btn" onClick={() => removeFromFavorites(fav.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No favorite products yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
