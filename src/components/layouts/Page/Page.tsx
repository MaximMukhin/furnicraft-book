import React, { PropsWithChildren } from "react";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

interface PageProps {}

export const Page: React.FC<PropsWithChildren<PageProps>> = (props) => {
  // const { children } = props;

  return (
    <div>
      <Header></Header>
      <div>Привет Мир!</div>
      <Footer></Footer>
    </div>
  );
};
