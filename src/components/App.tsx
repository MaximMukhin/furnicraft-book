import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ArticlesPage } from "./views/ArticlesPage";
import { ArticlePage } from "./views/ArticlePage";

const App = () => {
  return (
    <BrowserRouter>
      <Link to={"/articles"}>Статьи</Link>
      <Link to={"/article"}>Статя</Link>
      <Routes>
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="articles/:_id" element={<ArticlePage />} />
        <Route path="article" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
