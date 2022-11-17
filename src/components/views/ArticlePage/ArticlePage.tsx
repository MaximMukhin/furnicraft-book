import React, { useEffect, useState } from "react";
import { Page } from "@/components/layouts/Page";
import axios from "axios";
import { Article } from "@/types";

interface ArticlesPageProps {}

export const ArticlesPage: React.FC<ArticlesPageProps> = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/articles").then((res) => {
      console.log(res.data.articles);
      setArticles(res.data.articles);
    });
  }, []);

  return (
    <Page>
      <div>ArticlePage</div>
    </Page>
  );
};
