import React from "react";
import { Navigation } from "@/components/layouts/Navigation";
import { StyledHeader } from "@/components/layouts/Header/styled";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};
