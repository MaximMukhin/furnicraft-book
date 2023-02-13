import React from "react";
import { ArticleModel } from "@/types";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

interface ArticleItemProps {
  article: ArticleModel;
  onDelete: (_id: string) => void;
}

export const ArticleItem: React.FC<ArticleItemProps> = (props) => {
  const { article, onDelete } = props;

  return (
    <div>
      <Typography variant={"subtitle1"}>id: {article._id}</Typography>
      <Typography variant={"h2"}>title: {article.title}</Typography>
      <Typography variant={"body2"}>content: {article.content}</Typography>

      <Button
        onClick={() => onDelete(article._id)}
        variant="contained"
        color="error"
        sx={{ mt: 1 }}
      >
        Удалить
      </Button>
    </div>
  );
};
