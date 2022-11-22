import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Page } from "@/components/layouts/Page";
import { ArticleItem } from "@/components/views/ArticlesPage/ArticleItem";
import { ArticleModel } from "@/types";
import { BasePath, getArticles } from "@/api";
import { API_HOST } from "@/constants";

interface ArticlesPageProps {}

export const ArticlesPage: React.FC<ArticlesPageProps> = () => {
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
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <Page>
      <div>ArticlesPage</div>

      <div>
        {articles.map((el) => (
          <div key={el._id}>
            <hr />
            <Link to={`/articles/${el._id}`}>Читать</Link>
            <br />
            <Link to={`/articles/editor/${el._id}`}>Редактировать</Link>
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
