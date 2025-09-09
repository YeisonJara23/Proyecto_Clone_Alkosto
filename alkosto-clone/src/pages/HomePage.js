import React from "react";
import "./HomePage.scss";
import ProductCard from "../components/Product/ProductCard";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import { products } from "../data/products";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* 🔹 Sección de categorías */}
      <CategoriesSection />

      {/* 🔹 Sección de productos destacados */}
      <section className="featured-products">
        <div className="container">
          <h2>Productos Destacados</h2>
          <div className="products-grid">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
