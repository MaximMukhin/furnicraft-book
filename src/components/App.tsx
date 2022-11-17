import { Footer } from "./layouts/Footer";
import { Page } from "./layouts/Page";
import { Header } from "./layouts/Header";

const App = () => {
  return (
    <div data-semantics="App">
      <Header></Header>
      <Page>Мир!</Page>
      <Footer></Footer>
    </div>
  );
};

export default App;
