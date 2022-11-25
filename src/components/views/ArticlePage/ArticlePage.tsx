import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Page } from "@/components/layouts/Page";
import { ArticleModel } from "@/types";
import { getArticle } from "@/api";
import { Button } from "@mui/material";

interface ArticlePageProps {}

export const ArticlePage: React.FC<ArticlePageProps> = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/articles");
  };

  const [article, setArticle] = useState<ArticleModel | null>(null);
  const { _id = "" } = useParams();

  useEffect(() => {
    getArticle({ _id }).then((res) => setArticle(res.data.article));
  }, [setArticle]);

  return (
    <Page>
      <Button
        style={{ textDecoration: "none", marginTop: "8px" }}
        onClick={goBack}
        variant="contained"
      >
        Назад
      </Button>
      <div>ArticlePage id: {_id}</div>
      <div>Title: {article?.title}</div>
      <div>Content: {article?.content} </div>
    </Page>
  );
};
