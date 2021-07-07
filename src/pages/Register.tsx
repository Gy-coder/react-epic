import React from "react";
import { useStores } from "../stores";

const Register: React.FC = () => {
  const { AuthStore } = useStores();
  return (
    <>
      <h1>{AuthStore.values.username}</h1>
    </>
  );
};

export default Register;
