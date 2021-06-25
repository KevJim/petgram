import React from "react";
import { useQuery } from "@apollo/client";
import { PhotoCard } from "../PhotoCard";
import { whitPhotos } from "../../hoc/withPhotos";
import Loader from "../Loader/index";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(whitPhotos, {
    variables: { categoryId },
  });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
