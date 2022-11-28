import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const navigate = useNavigate();

  const nav = (link: string) => {
    navigate(link);
  };

  return (
    <div>
      <Button onClick={() => nav("/articles")} variant="contained">
        Статьи
      </Button>
      <Button
        style={{ marginLeft: "8px" }}
        onClick={() => nav("/articles/editor")}
        variant="contained"
      >
        Создание статьи
      </Button>
    </div>
  );
};
