import React, { useState } from "react";
import axios from "axios";
import { Page } from "@/components/layouts/Page";
import { ArticleModel } from "@/types";
import { API_HOST } from "@/constants";
import { BasePath } from "@/api";

interface ArticleEditorPageProps {}

export const ArticleEditorPage: React.FC<ArticleEditorPageProps> = () => {
  const [title, setTitle] = useState<ArticleModel["title"]>("");
  const [content, setContent] = useState<ArticleModel["content"]>("");

  const postArticle = () => {
    axios
      .post(`${API_HOST}${BasePath.Articles}`, {
        title: title,
        content: content,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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
      <button onClick={() => postArticle()}>Создать!</button>
    </Page>
  );
};
