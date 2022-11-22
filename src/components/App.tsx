import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ArticlesPage } from "./views/ArticlesPage";
import { ArticlePage } from "./views/ArticlePage";
import { ArticleEditorPage } from "@/components/views/ArticleEditorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Link to={"/articles"}>Статьи </Link>
      <br />
      <Link to={"/articles/editor"}>Создание статьи </Link>

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
