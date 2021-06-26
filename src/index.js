import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { App } from "./App";
import Context from "./Context";
import "./styles/Loader.css";

const client = new ApolloClient({
  uri: "https://petgram-server-kevin.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
