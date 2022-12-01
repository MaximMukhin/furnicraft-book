import React, { PropsWithChildren } from "react";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { TabTitle } from "@/components/shared/TabTitle";

interface PageProps {
  title?: string;
}

export const Page: React.FC<PropsWithChildren<PageProps>> = (props) => {
  const { children, title } = props;

  return (
    <div>
      <Header></Header>
      <TabTitle tabTitle={title} />
      <h2>{title}</h2>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};
