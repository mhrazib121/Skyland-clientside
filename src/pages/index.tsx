import { MainComponent } from "@/components/Common";
import Hero from "@/components/Hero";
import RootLayout from "@/components/Layout/RootLayout";
import Products from "@/components/Products";
import Footer from "@/components/Shared/Footer/Footer";
import { GetStaticProps } from "next";
import { ReactElement } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ result }: { result: IProduct[] }) {
  return (
    <MainComponent>
      <Hero />
      <Products data={result} />
    </MainComponent>
  );
}

export type IProduct = {
  id: string;
  image: string;
  name: string;
  brand: string;
  category: string;
  status: string;
  price: number;
  description: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  individualRating: number;
  averageRating: number;
  reviews: {
    userName: string;
    message: string;
  }[];
};
export const getStaticProps: GetStaticProps<{
  result: IProduct[];
}> = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  const result = await res.json();
  return { props: { result } };
};
