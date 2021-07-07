import { observer } from "mobx-react";
import React, { useState } from "react";
import { useStores } from "../stores";

const Login = observer(() => {
  const { AuthStore } = useStores();
  const [x, setX] = useState("");
  const handleChage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await setX((prev) => (prev = e.target.value));
    AuthStore.setUsername(e.target.value);
  };
  return (
    <>
      <h1>AuthStore: {AuthStore.values.username}</h1>
      <input type="text" value={x} onChange={handleChage} />
    </>
  );
});

export default Login;
