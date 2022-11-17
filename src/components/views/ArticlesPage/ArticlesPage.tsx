import React from "react";
import { useParams } from "react-router-dom";
import { Page } from "@/components/layouts/Page";

interface ArticlePageProps {}

export const ArticlePage: React.FC<ArticlePageProps> = () => {
  const params = useParams();
  console.log(params);
  return (
    <Page>
      <div>ArticlesPage</div>
    </Page>
  );
};
