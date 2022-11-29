import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState } from "recoil";

import { Page } from "@/components/layouts/Page";
import { ArticleItem } from "@/components/views/ArticlesPage/ArticleItem";
import { Button } from "@mui/material";
import { ArticleModel } from "@/types";
import { BasePath, getArticles } from "@/api";
import { API_HOST } from "@/constants";
import { notificationState } from "@/states/notification";

interface ArticlesPageProps {}

export const ArticlesPage: React.FC<ArticlesPageProps> = () => {
  const navigate = useNavigate();

  const setNotification = useSetRecoilState(notificationState);

  const [articles, setArticles] = useState<ArticleModel[]>([]);

  useEffect(() => {
    getArticles().then((res) => setArticles(res.data.articles));
  }, [setArticles]);

  const handelArticleDelete = (_id: string) => {
    const newArticles = [...articles];

    newArticles.splice(
      newArticles.findIndex((el) => el._id === _id),
      1
    );

    setArticles(newArticles);

    axios
      .delete(`${API_HOST}${BasePath.Articles}/${_id}`)
      .then((res) => {
        setNotification({ content: "Статья удалена!", severity: "error" });
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Page>
      <div>
        {articles.map((el) => (
          <div
            key={el._id}
            style={{
              marginTop: "8px",
              padding: "12px",
              maxWidth: "400px",
              paddingTop: "12px",
              border: "1px solid lightGray",
              borderRadius: "4px",
            }}
          >
            <div>
              <Button
                onClick={() => navigate(`/articles/${el._id}`)}
                variant="contained"
              >
                Читать
              </Button>

              <Button
                style={{ marginLeft: "8px" }}
                onClick={() => navigate(`/articles/editor/${el._id}`)}
                variant="contained"
              >
                Редактировать
              </Button>
            </div>
            <br />
            <ArticleItem
              key={el._id}
              article={el}
              onDelete={handelArticleDelete}
            />
          </div>
        ))}
      </div>
    </Page>
  );
};
