import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticlesPage } from "./views/ArticlePage";
import { ArticlePage } from "./views/ArticlesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes location="">
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="articles/:_id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
