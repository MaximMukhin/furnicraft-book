import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page } from "@/components/layouts/Page";
import { ArticleItem } from "@/components/views/ArticlesPage/ArticleItem";
import { ArticleModel } from "@/types";
import { getArticles } from "@/api";

interface ArticlesPageProps {}

export const ArticlesPage: React.FC<ArticlesPageProps> = () => {
  const [articles, setArticles] = useState<ArticleModel[]>([]);

  useEffect(() => {
    getArticles().then((res) => setArticles(res.data.articles));
  }, [setArticles]);

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
    </Page>
  );
};
