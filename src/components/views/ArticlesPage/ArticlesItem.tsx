import React from "react";

interface ArticlesItemProps {}

export const ArticlesItem: React.FC<ArticlesItemProps> = ({
  articlesProps,
}) => {
  console.log("ArticlesItemProps");
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <p>id: {articlesProps._id}</p>
      <p>title: {articlesProps.title}</p>
      <p>content: {articlesProps.content}</p>
    </div>
  );
};
