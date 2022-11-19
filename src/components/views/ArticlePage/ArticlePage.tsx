import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Page } from "@/components/layouts/Page";
import { ArticleModel } from "@/types";
import { getArticle } from "@/api";

interface ArticlePageProps {}

export const ArticlePage: React.FC<ArticlePageProps> = () => {
  const [article, setArticle] = useState<ArticleModel | null>(null);
  const { _id = "" } = useParams();

  useEffect(() => {
    getArticle({ _id }).then((res) => setArticle(res.data.article));
  }, [setArticle]);

  return (
    <Page>
      <div>ArticlePage id: {_id}</div>
      <div>Title: {article?.title}</div>
      <div>Content: {article?.content} </div>
    </Page>
  );
};
