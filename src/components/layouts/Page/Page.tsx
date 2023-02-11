import React, { PropsWithChildren } from "react";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { TabTitle } from "@/components/shared/TabTitle";
import { ContainerStyled, MainStyled } from "@/components/styled";

interface PageProps {
  title?: string;
}

export const Page: React.FC<PropsWithChildren<PageProps>> = (props) => {
  const { children, title } = props;

  return (
    <ContainerStyled>
      <TabTitle title={title} />

      <Header></Header>

      <MainStyled>
        <h2>{title}</h2>
        <div>{children}</div>
      </MainStyled>

      <Footer></Footer>
    </ContainerStyled>
  );
};
