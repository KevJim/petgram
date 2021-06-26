import React, { useState } from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutation";
import { useLoginMutation } from "../container/LoginMutation";

export const NotRegisteredUser = () => {
  const [form, setForm] = useState(false);
  const { registerMutation, mutationLoading, mutationError } =
    useRegisterMutation();

  const { loginMutation, loading, error } = useLoginMutation();

  const errorMsg =
    mutationError && "El usuario ya existe o hay algún otro problema.";

  const erroMsgLoa =
    error && "La contraseña no es correcta o el usuario no existe";
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables }).then(activateAuth);
        };

        const onLogin = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          loginMutation({ variables }).then(activateAuth);
        };

        return (
          <div
            style={{
              width: "90%",
              margin: "0 auto",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "100px",
              backgroundColor: "rgb(36, 56, 91)",
            }}
          >
            {form ? (
              <>
                <UserForm
                  disabled={loading}
                  error={erroMsgLoa}
                  onSubmit={onLogin}
                  title="Iniciar Sesión"
                />
                <span style={{ marginBottom: "10px", color: "#fff" }}>
                  ¿No tienes una cuenta?{" "}
                  <button
                    style={{ color: "#33b1ff" }}
                    onClick={() => setForm(!form)}
                  >
                    Crea una
                  </button>
                </span>
              </>
            ) : (
              <>
                <UserForm
                  disabled={mutationLoading}
                  error={errorMsg}
                  onSubmit={onSubmit}
                  title="Registrarse"
                />
                <span style={{ marginBottom: "10px", color: "#fff" }}>
                  ¿Tienes una cuenta?{" "}
                  <button
                    style={{ color: "#33b1ff" }}
                    onClick={() => setForm(!form)}
                  >
                    Inicia Sesión
                  </button>
                </span>
              </>
            )}
          </div>
        );
      }}
    </Context.Consumer>
  );
};
