import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import UsersProvider from "./components/context/UserDataProvider.tsx";
import { Provider } from "react-redux";
import Store from "./components/store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={Store}>
      <UsersProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UsersProvider>
    </Provider>
  </StrictMode>,
);
