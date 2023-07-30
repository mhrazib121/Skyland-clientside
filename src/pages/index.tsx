import { MainComponent } from "@/components/Common";
import Hero from "@/components/Hero";
import RootLayout from "@/components/Layout/RootLayout";
import Footer from "@/components/Shared/Footer/Footer";
import { ReactElement } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainComponent>
      <Hero />
    </MainComponent>
  );
}
// Home.getLayout = function getLayout(page: ReactElement) {
//   return <RootLayout>{page}</RootLayout>;
// };
