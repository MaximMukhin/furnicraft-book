import React from "react";
import { ArticleModel } from "@/types";

interface ArticleItemProps {
  article: ArticleModel;
}

export const ArticleItem: React.FC<ArticleItemProps> = (props) => {
  const { article } = props;

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <p>id: {article._id}</p>
      <p>title: {article.title}</p>
      <p>content: {article.content}</p>
    </div>
  );
};
