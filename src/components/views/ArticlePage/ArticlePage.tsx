import React, { useEffect, useState } from "react";
import { Page } from "@/components/layouts/Page";
import axios from "axios";
import { Article } from "@/types";
import { useParams } from "react-router-dom";

interface ArticlePageProps {}

export const ArticlePage: React.FC<ArticlePageProps> = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const params = useParams();
  useEffect(() => {
    axios.get("http://localhost:4000/articles").then((res) => {
      console.log("article", res.data.articles);
      setArticles(res.data.articles);
    });
  }, [setArticles]);

  return (
    <Page>
      <div>ArticlePage</div>
    </Page>
  );
};
