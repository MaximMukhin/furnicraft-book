import React from "react";
import { ArticleModel } from "@/types";

interface ArticleItemProps {
  article: ArticleModel;
}

export const ArticleItem: React.FC<ArticleItemProps> = (props) => {
  const { article, deleteArticle } = props;

  return (
    <div style={{ backgroundColor: "black" }}>
      <p>id: {article._id}</p>
      <p>title: {article.title}</p>
      <p>content: {article.content}</p>
      <button onClick={() => deleteArticle(article._id)}>
        Удалить {article._id}
      </button>
    </div>
  );
};
