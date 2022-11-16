import { Page, Footer, Header } from "./layouts/Page";

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
