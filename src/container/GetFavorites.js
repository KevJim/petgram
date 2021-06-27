import { useQuery, gql } from "@apollo/client";
import React from "react";
import Loader from "../components/Loader";
import { ListOfFavs } from "../components/ListOfFavs";

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const FavsWithQuery = () => {
  const { loading, data, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <Loader />;
  }
  const { favs } = data;

  return <ListOfFavs favs={favs} />;
};
