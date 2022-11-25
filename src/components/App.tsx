import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticlesPage } from "./views/ArticlesPage";
import { ArticlePage } from "./views/ArticlePage";
import { ArticleEditorPage } from "@/components/views/ArticleEditorPage";
import { Notifier } from "@/components/shared/Notifier";
import { Button } from "@mui/material";

const App = () => {
  // const nav = (link) => {
  //   navigate(link);
  // };

  return (
    <div style={{ margin: "8px" }}>
      <BrowserRouter>
        <Notifier />

        <Routes>
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="articles/:_id" element={<ArticlePage />} />
          <Route path="articles/editor" element={<ArticleEditorPage />} />
          <Route path="articles/editor/:_id" element={<ArticleEditorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
