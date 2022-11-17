import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ArticlesPage } from "./views/ArticlePage";
import { ArticlePage } from "./views/ArticlesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Link to={"/articles"}>Статьи</Link>
      <Link to={"/"}>Статьи</Link>
      <Routes>
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="articles/:_id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
