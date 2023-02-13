import React, { PropsWithChildren } from "react";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { TabTitle } from "@/components/shared/TabTitle";
import { StyledContainer, StyledMain } from "@/components/layouts/Page/styled";
import { Typography } from "@mui/material";

interface PageProps {
  title?: string;
}

export const Page: React.FC<PropsWithChildren<PageProps>> = (props) => {
  const { children, title } = props;

  return (
    <StyledContainer>
      <TabTitle title={title} />

      <Header></Header>

      <StyledMain>
        <Typography sx={{ mb: 1 }} variant={"h2"}>
          {title}
        </Typography>
        <div>{children}</div>
      </StyledMain>

      <Footer></Footer>
    </StyledContainer>
  );
};
