import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Page } from "@/components/layouts/Page";
import { ArticleModel } from "@/types";
import { API_HOST } from "@/constants";
import { BasePath, getArticle } from "@/api";

import { TextField } from "@mui/material";
import { CustomizedNotifier } from "@/components/shared/Toster";

interface ArticleEditorPageProps {}

export const ArticleEditorPage: React.FC<ArticleEditorPageProps> = () => {
  const { _id = "" } = useParams();
  const [title, setTitle] = useState<ArticleModel["title"]>("");
  const [content, setContent] = useState<ArticleModel["content"]>("");
  const [isDisabled, setIsDisabled] = useState(false);

  const isDisabled2 = !title || !content || isDisabled;

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
      <TextField
        size={"small"}
        id="outlined-basic"
        placeholder={"Название статьи"}
        variant="outlined"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        name="title"
        type="text"
      />
      <br />
      <br />
      <TextField
        size={"small"}
        id="outlined-textarea"
        placeholder={"Контент статьи"}
        minRows={6}
        multiline
        value={content}
        onChange={(event) => setContent(event.target.value)}
        name="content"
      />
      <br />
      <br />
      <CustomizedNotifier
        btnText={_id ? "Редактировать" : "Создать!"}
        alertText={_id ? "Статья отредактирована" : "Статья создана!"}
        func={_id ? updateArticle : createArticle}
        isDisabled={!title || !content || isDisabled}
      />
      <br />
    </Page>
  );
};
