import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Page } from "@/components/layouts/Page";
import { ArticleModel } from "@/types";
import { API_HOST } from "@/constants";
import { BasePath, getArticle } from "@/api";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { TextField } from "@mui/material";

interface ArticleEditorPageProps {}

export const ArticleEditorPage: React.FC<ArticleEditorPageProps> = () => {
  const { _id = "" } = useParams();
  const [title, setTitle] = useState<ArticleModel["title"]>("");
  const [content, setContent] = useState<ArticleModel["content"]>("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [create, setCreate] = React.useState(false);
  const [update, setUpdate] = React.useState(false);

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const onClickCreate = () => {
    setCreate(true);
  };

  const handleCreate = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setCreate(false);
  };

  const onClickUpdate = () => {
    setUpdate(true);
  };

  const handleUpdate = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setUpdate(false);
  };

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
      {_id ? (
        <Button
          variant="contained"
          onClick={() => {
            updateArticle();
            onClickUpdate();
          }}
        >
          Редактировать!
        </Button>
      ) : (
        <Button
          variant="contained"
          disabled={!title || !content || isDisabled}
          onClick={() => {
            createArticle();
            onClickCreate();
          }}
        >
          Создать!
        </Button>
      )}

      <Snackbar open={create} autoHideDuration={6000} onClose={handleCreate}>
        <Alert onClose={handleCreate} severity="info" sx={{ width: "100%" }}>
          Статья создана!
        </Alert>
      </Snackbar>

      <Snackbar open={update} autoHideDuration={6000} onClose={handleUpdate}>
        <Alert onClose={handleUpdate} severity="info" sx={{ width: "100%" }}>
          Статья отредактирована!
        </Alert>
      </Snackbar>
    </Page>
  );
};
