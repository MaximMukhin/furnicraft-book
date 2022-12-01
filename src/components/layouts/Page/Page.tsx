import React, { PropsWithChildren } from "react";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

interface PageProps {
  title: string | undefined;
}

export const Page: React.FC<PropsWithChildren<PageProps>> = (props) => {
  const { children, title } = props;

  return (
    <div>
      <Header></Header>
      <h2>{title}</h2>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};
