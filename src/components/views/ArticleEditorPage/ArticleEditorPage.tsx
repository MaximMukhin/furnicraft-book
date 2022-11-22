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
  const [isDisabled, setIsDisabled] = useState(false);

  const createArticle = () => {
    setIsDisabled(true);
    axios
      .post(`${API_HOST}${BasePath.Articles}`, {
        title: title,
        content: content,
      })
      .then((res) => {
        console.log(res);
        setIsDisabled(false);
      })
      .catch((error) => {
        console.log(error);
        setIsDisabled(false);
      });
  };

  const updateArticle = () => {
    axios
      .put(`${API_HOST}${BasePath.Articles}/${_id}`, {
        title: title,
        content: content,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (_id) {
      getArticle({ _id }).then((res) => {
        setTitle(res.data.article.title);
        setContent(res.data.article.content);
      });
    }
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
      <br />
      {_id ? (
        <button onClick={() => updateArticle()}>Редактировать!</button>
      ) : (
        <button
          disabled={!title || !content || isDisabled}
          onClick={() => createArticle()}
        >
          Создать!
        </button>
      )}
    </Page>
  );
};
