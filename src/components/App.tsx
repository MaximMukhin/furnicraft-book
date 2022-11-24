import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ArticlesPage } from "./views/ArticlesPage";
import { ArticlePage } from "./views/ArticlePage";
import { ArticleEditorPage } from "@/components/views/ArticleEditorPage";
import Button from "@mui/material/Button";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link
          style={{ textDecoration: "none", marginLeft: "8px" }}
          to={"/articles"}
        >
          <Button variant="contained">Статьи</Button>
        </Link>
        <Link
          style={{ textDecoration: "none", marginLeft: "8px" }}
          to={"/articles/editor"}
        >
          <Button variant="contained">Создание статьи</Button>
        </Link>
      </div>

      <Routes>
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="articles/:_id" element={<ArticlePage />} />
        <Route path="articles/editor" element={<ArticleEditorPage />} />
        <Route path="articles/editor/:_id" element={<ArticleEditorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
