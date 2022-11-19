import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import ThemeProvider from "@/components/theme/ThemeProvider";
import App from "@/components/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
