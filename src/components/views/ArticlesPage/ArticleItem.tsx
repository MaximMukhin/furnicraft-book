import React from "react";

interface ArticleItemProps {}

export const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  const { _id, title, content } = article;
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <p>id: {_id}</p>
      <p>title: {title}</p>
      <p>content: {content}</p>
    </div>
  );
};
