import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      productName: "Product 1",
      image: "/path/to/product1-image.jpg",
      category: "Category 1",
      price: 49.99,
      status: "In Stock",
      rating: 5,
    },
    {
      productName: "Product 1",
      image: "/path/to/product1-image.jpg",
      category: "Category 1",
      price: 49.99,
      status: "In Stock",
      rating: 3,
    },
    {
      productName: "Product 1",
      image: "/path/to/product1-image.jpg",
      category: "Category 1",
      price: 49.99,
      status: "In Stock",
      rating: 3,
    },
    {
      productName: "Product 1",
      image: "/path/to/product1-image.jpg",
      category: "Category 1",
      price: 49.99,
      status: "In Stock",
      rating: 3,
    },
    {
      productName: "Product 1",
      image: "/path/to/product1-image.jpg",
      category: "Category 1",
      price: 49.99,
      status: "In Stock",
      rating: 3,
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-4">
        Featured Products
      </h1>
      <div className="container mx-auto mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
