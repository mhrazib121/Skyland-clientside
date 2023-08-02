import { MainComponent } from "@/components/Common";
import Products from "@/components/Products";
import { GetStaticProps } from "next";
import { IProduct } from "..";

const ProductsOnCategory = ({ result }: { result: IProduct[] }) => {
  return (
    <MainComponent>
      <Products data={result} />
    </MainComponent>
  );
};

export default ProductsOnCategory;

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  // const data = await res.json();

  const data = [
    {
      name: "Graphics Card",
      link: "graphics-card",
    },
    {
      name: "Motherboard",
      link: "motherboard",
    },
    {
      name: "RAM",
      link: "ram",
    },
    {
      name: "Power Supply Unit",
      link: "psu",
    },
    {
      name: "Storage Device",
      link: "storage",
    },
    {
      name: "Monitor",
      link: "monitor",
    },
    {
      name: "Others",
      link: "others",
    },
  ];

  const paths = data.map((product) => {
    return {
      params: { categoryName: product.link.toString() },
    };
  });
  console.log("object paths", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  result: IProduct;
}> = async (context) => {
  let queryName;
  const categoryName = context?.params?.categoryName;

  queryName =
    categoryName === "ram"
      ? "RAM"
      : categoryName === "graphics-card"
      ? "Graphics Card"
      : categoryName === "motherboard"
      ? "Motherboard"
      : categoryName === "monitor"
      ? "Monitor"
      : categoryName === "storage"
      ? "Storage Device"
      : categoryName === "psu"
      ? "Power Supply Unit"
      : categoryName === "others"
      ? "Others"
      : "";

  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/category/${queryName}`
    );
    const result = await res.json();
    console.log("API Response:", result); // Log the API response to check its content
    return { props: { result } };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { notFound: true }; // Return 404 page if there's an error
  }
};
