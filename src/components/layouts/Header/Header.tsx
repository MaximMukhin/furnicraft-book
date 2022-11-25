import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/layouts/Navigation";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  useNavigate();
  return <Navigation />;
};
