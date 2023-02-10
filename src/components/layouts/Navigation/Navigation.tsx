import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const navigate = useNavigate();

  return (
    <ButtonGroup>
      <Button onClick={() => navigate("/articles")} variant="contained">
        Статьи
      </Button>
      <Button onClick={() => navigate("/articles/editor")} variant="contained">
        Создание статьи
      </Button>
    </ButtonGroup>
  );
};
