import React, { useEffect, useState } from "react";
import axios from "axios";
import { Page } from "@/components/layouts/Page";
import { ArticleModel } from "@/types";
import { API_HOST } from "@/constants";
import { BasePath, getArticle } from "@/api";
import { useParams } from "react-router-dom";

interface ArticleEditorPageProps {}

export const ArticleEditorPage: React.FC<ArticleEditorPageProps> = () => {
  const { _id = "" } = useParams();
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

  useEffect(() => {
    getArticle({ _id }).then((res) => {
      if (_id) {
        setTitle(res.data.article.title);
        setContent(res.data.article.content);
      }
    });
  }, []);

  return (
    <Page>
      <h2>Добавление статьи в базу</h2>
      <input
        size={42}
        defaultValue={title}
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
        defaultValue={content}
        onChange={(event) => setContent(event.target.value)}
        name="content"
        placeholder="Контент статьи"
      />
      {_id ? (
        <button onClick={() => postArticle()}>Редактировать!</button>
      ) : (
        <button onClick={() => postArticle()}>Создать!</button>
      )}
    </Page>
  );
};
