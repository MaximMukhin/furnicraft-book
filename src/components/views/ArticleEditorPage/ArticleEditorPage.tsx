import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import { Page } from "@/components/layouts/Page";
import { TextField, Button } from "@mui/material";
import { ArticleModel } from "@/types";
import { API_HOST } from "@/constants";
import { BasePath, getArticle } from "@/api";
import { notificationState } from "@/states/notification";

interface ArticleEditorPageProps {}

export const ArticleEditorPage: React.FC<ArticleEditorPageProps> = () => {
  const [, setNotification] = useRecoilState(notificationState);

  const { _id = "" } = useParams();

  const [title, setTitle] = useState<ArticleModel["title"]>("");
  const [content, setContent] = useState<ArticleModel["content"]>("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!_id) {
      setTitle("");
      setContent("");
    }
  }, [_id]);

  const createArticle = () => {
    setIsDisabled(true);
    axios
      .post(`${API_HOST}${BasePath.Articles}`, {
        title: title,
        content: content,
      })
      .then((res) => {
        console.log(res);
        setNotification({ content: "Статья создана!", severity: "success" });
        setIsDisabled(false);
      })
      .catch((error) => {
        console.log(error);
        setIsDisabled(false);
      });
  };

  const updateArticle = () => {
    setIsDisabled(true);
    axios
      .put(`${API_HOST}${BasePath.Articles}/${_id}`, {
        title: title,
        content: content,
      })
      .then((res) => {
        console.log(res);
        setIsDisabled(false);
        setNotification({
          content: "Статья отредактирована!",
          severity: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        setIsDisabled(false);
      });
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
      <h2>{_id ? "Редактировать статью" : "Добавление статьи в базу"}</h2>
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
      <br /> <br />
      {_id ? (
        <Button
          disabled={!title || !content || isDisabled}
          variant="contained"
          onClick={updateArticle}
        >
          Редактировать!
        </Button>
      ) : (
        <Button
          disabled={!title || !content || isDisabled}
          variant="contained"
          onClick={createArticle}
        >
          Создать!
        </Button>
      )}
      <br />
      <br />
    </Page>
  );
};
