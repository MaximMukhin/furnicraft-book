import React from "react";
import { ArticleModel } from "@/types";
import Button from "@mui/material/Button";

interface ArticleItemProps {
  article: ArticleModel;
  onDelete: (_id: string) => void;
}

export const ArticleItem: React.FC<ArticleItemProps> = (props) => {
  const { article, onDelete } = props;

  return (
    <div>
      <p style={{ margin: "4px 0" }}>id: {article._id}</p>
      <h2 style={{ margin: "4px 0" }}>title: {article.title}</h2>
      <p style={{ margin: "4px 0" }}>content: {article.content}</p>

      <Button
        onClick={() => onDelete(article._id)}
        variant="contained"
        color="error"
      >
        Удалить
      </Button>
    </div>
  );
};
