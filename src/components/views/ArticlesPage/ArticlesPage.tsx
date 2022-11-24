import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";

import { Page } from "@/components/layouts/Page";
import { ArticleItem } from "@/components/views/ArticlesPage/ArticleItem";
import { Button } from "@mui/material";
import { ArticleModel } from "@/types";
import { BasePath, getArticles } from "@/api";
import { API_HOST } from "@/constants";
import { notificationState } from "@/states/notification";

interface ArticlesPageProps {}

export const ArticlesPage: React.FC<ArticlesPageProps> = () => {
  const [, setNotification] = useRecoilState(notificationState);

  const [articles, setArticles] = useState<ArticleModel[]>([]);

  useEffect(() => {
    getArticles().then((res) => setArticles(res.data.articles));
  }, [setArticles]);

  const handelArticleDelete = (_id) => {
    const newArticles = [...articles];

    newArticles.splice(
      newArticles.findIndex((el) => el._id === _id),
      1
    );

    setArticles(newArticles);

    axios
      .delete(`${API_HOST}${BasePath.Articles}/${_id}`)
      .then((res) => {
        setNotification({ text: "Статья удалена!", severity: "error" });
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Page>
      <div>ArticlesPage</div>

      <div>
        {articles.map((el) => (
          <div key={el._id}>
            <hr />
            <div>
              <Link
                style={{ textDecoration: "none", marginLeft: "8px" }}
                to={`/articles/${el._id}`}
              >
                <Button variant="contained">Читать</Button>
              </Link>

              <Link
                style={{ textDecoration: "none", marginLeft: "8px" }}
                to={`/articles/editor/${el._id}`}
              >
                <Button variant="contained">Редактировать</Button>
              </Link>
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
