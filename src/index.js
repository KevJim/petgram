import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  from,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { App } from "./App";
import Context from "./Context";
import "./styles/Loader.css";

const httpLink = createHttpLink({
  uri: "https://petgram-server-kevin.vercel.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    window.sessionStorage.removeItem("token"), (window.location = "/user");
  }
});

const client = new ApolloClient({
  link: from([errorMiddleware, authLink.concat(httpLink)]),
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
