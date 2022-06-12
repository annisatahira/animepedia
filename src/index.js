import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/api";
import { GlobalStyles } from "./parts/globals";
import AppRoutes from "./routes";
import { CollectionProvider } from "./context/collection";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CollectionProvider>
        <ApolloProvider client={client}>
          <GlobalStyles />
          <AppRoutes />
        </ApolloProvider>
      </CollectionProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
