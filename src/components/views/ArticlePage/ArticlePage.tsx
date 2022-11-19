import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Page } from "@/components/layouts/Page";
import { ArticleModel } from "@/types";
import { API_HOST } from "@/constants";

interface ArticlePageProps {}

export const ArticlePage: React.FC<ArticlePageProps> = () => {
  const [article, setArticle] = useState<ArticleModel | null>(null);
  const { _id } = useParams();

  useEffect(() => {
    axios.get(`${API_HOST}/articles/${_id}`).then((res) => {
      setArticle(res.data.article);
    });
  }, [setArticle]);

  return (
    <Page>
      <div>ArticlePage id: {_id}</div>
      <div>Title: {article?.title}</div>
      <div>Content: {article?.content} </div>
    </Page>
  );
};
