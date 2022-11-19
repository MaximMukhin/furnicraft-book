import React, { useEffect, useState } from "react";
import { Page } from "@/components/layouts/Page";
import axios from "axios";
import { ArticleModel } from "@/types";
import { useParams, Link } from "react-router-dom";
import { ArticleItem } from "@/components/views/ArticlesPage/ArticleItem";
import { API_HOST } from "@/constants";

interface ArticlesPageProps {}

export const ArticlesPage: React.FC<ArticlesPageProps> = () => {
  const [articles, setArticles] = useState<ArticleModel[]>([]);
  useEffect(() => {
    axios.get(`${API_HOST}/articles`).then((res) => {
      setArticles(res.data.articles);
    });
  }, [setArticles]);

  const displayArticles = () => {
    return articles.map((el) => <ArticleItem key={el._id} article={el} />);
  };

  return (
    <Page>
      <div>ArticlesPage</div>

      <div>
        {articles.map((el) => (
          <Link key={el._id} to={`/articles/${el._id}`}>
            <ArticleItem key={el._id} article={el} />
          </Link>
        ))}
      </div>

      {/*<div>{displayArticles()}</div>*/}

      {/*      <div>
        {articles.map((el) => (
          <ArticlesItem key={el._id} articlesProps={el} />
        ))}
      </div>*/}
    </Page>
  );
};
