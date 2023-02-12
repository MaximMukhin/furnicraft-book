import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Page } from "@/components/layouts/Page";
import { ArticleModel } from "@/types";
import { getArticle } from "@/api";
import { Button, Card, Typography } from "@mui/material";

interface ArticlePageProps {}

export const ArticlePage: React.FC<ArticlePageProps> = () => {
  const navigate = useNavigate();

  const [article, setArticle] = useState<ArticleModel | null>(null);
  const { _id = "" } = useParams();

  useEffect(() => {
    getArticle({ _id }).then((res) => setArticle(res.data.article));
  }, [setArticle]);

  return (
    <Page title={article?.title}>
      <Card variant={"outlined"} sx={{ minWidth: 200, mt: 1, p: 1 }}>
        <Typography variant={"subtitle1"}>ArticlePage id: {_id}</Typography>
        <Typography variant={"h2"}>Title: {article?.title}</Typography>
        <Typography variant={"body2"}>Content: {article?.content} </Typography>
        <Button
          onClick={() => navigate("/articles")}
          sx={{ mt: 1 }}
          variant="contained"
        >
          Назад
        </Button>
      </Card>
    </Page>
  );
};
