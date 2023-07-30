import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  return <div>{router.query.productId}</div>;
};

export default ProductDetails;
