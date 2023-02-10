import React from "react";
import { HeaderStyled } from "@/components/styled/HeaderStyled";
import { Navigation } from "@/components/layouts/Navigation";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <Navigation />
    </HeaderStyled>
  );
};
