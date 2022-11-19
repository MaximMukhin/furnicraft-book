import React, { useState } from "react";
import { Page } from "@/components/layouts/Page";
import { ArticleModel } from "@/types";

interface ArticleEditorPageProps {}

export const ArticleEditorPage: React.FC<ArticleEditorPageProps> = () => {
  const [title, setTitle] = useState<ArticleModel | null>(null);
  const [content, setContent] = useState<ArticleModel | null>(null);

  const addArticle = () => {
    const article = {
      title: title,
      content: content,
    };
    console.log("article", article);
    postArticle(article);
  };

  const postArticle = (article) => {
    fetch("http://localhost:4000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    })
      .then((res) => res.json())
      .then((data) => console.log("data", data));
  };

  return (
    <Page>
      <h2>Добавление статьи в базу</h2>
      <input
        size={40}
        onChange={(event) => setTitle(event.target.value)}
        name="title"
        type="text"
        placeholder="Название статьи"
      />
      <br />
      <textarea
        rows={10}
        cols={40}
        style={{ resize: "none" }}
        onChange={(event) => setContent(event.target.value)}
        name="content"
        placeholder="Контент статьи"
      />
      <button onClick={() => addArticle()}>Создать!</button>
    </Page>
  );
};
