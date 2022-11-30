import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/articles")} variant="contained">
        Статьи
      </Button>
      <Button
        style={{ marginLeft: "8px" }}
        onClick={() => navigate("/articles/editor")}
        variant="contained"
      >
        Создание статьи
      </Button>
    </div>
  );
};
