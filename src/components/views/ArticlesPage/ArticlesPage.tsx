import React, { useEffect, useState } from "react";
import { Page } from "@/components/layouts/Page";
import axios from "axios";
import { Article } from "@/types";
import { useParams } from "react-router-dom";
import { ArticlesItem } from "@/components/views/ArticlesPage/ArticlesItem";

interface ArticlesPageProps {}

export const ArticlesPage: React.FC<ArticlesPageProps> = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const params = useParams();
  useEffect(() => {
    axios.get("http://localhost:4000/articles").then((res) => {
      console.log("articles", res.data.articles);
      setArticles(res.data.articles);
    });
  }, [setArticles]);

  const displayArticles = () => {
    return articles.map((el) => (
      <ArticlesItem key={el._id} articlesProps={el} />
    ));
  };

  return (
    <Page>
      <div>ArticlesPage</div>

      <div>{displayArticles()}</div>

      {/*      <div>
        {articles.map((el) => (
          <ArticlesItem key={el._id} articlesProps={el} />
        ))}
      </div>*/}
    </Page>
  );
};
