import React from "react";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";
import { Layout } from "../components/Layout";

const HomePage = ({ categoryId }) => {
  return (
    <Layout
      title="Petgram - Tu app de fotos de mascotas"
      subtitle="Con Petgram puedes encontrar fotos de tus animales favoritos"
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
