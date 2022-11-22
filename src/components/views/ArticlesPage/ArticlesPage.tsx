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
          <div key={el._id}>
            <hr />
            <Link to={`/articles/${el._id}`}>Читать</Link>
            <br />
            <Link to={`/articles/editor/${el._id}`}>Редактировать</Link>
            <ArticleItem key={el._id} article={el} />
          </div>
        ))}
      </div>
    </Page>
  );
};
