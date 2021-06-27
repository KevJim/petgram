import React, { useContext } from "react";
import { Context } from "../Context";
import { SubmitButton } from "../components/SubmitButton/index";
export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontStyle: "italic",
          marginBottom: "10px",
        }}
      >
        User
      </h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </>
  );
};
