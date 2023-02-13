import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState } from "recoil";

import { Page } from "@/components/layouts/Page";
import { ArticleItem } from "@/components/views/ArticlesPage/ArticleItem";
import { Button, Card } from "@mui/material";
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
    <Page title="Все статьи">
      <div>
        {articles.map((el) => (
          <Card
            variant={"outlined"}
            sx={{ minWidth: 200, mt: 1, p: 1 }}
            key={el._id}
          >
            <div>
              <Button
                sx={{ mb: 1 }}
                onClick={() => navigate(`/articles/${el._id}`)}
                variant="contained"
              >
                Читать
              </Button>

              <Button
                sx={{ ml: 1, mb: 1 }}
                onClick={() => navigate(`/articles/editor/${el._id}`)}
                variant="contained"
              >
                Редактировать
              </Button>
            </div>
            <ArticleItem
              key={el._id}
              article={el}
              onDelete={handelArticleDelete}
            />
          </Card>
        ))}
      </div>
    </Page>
  );
};
