import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";
import UpLoader from "../components/UpLoader";
import Tips from "../components/Tips";

const Home: React.FC = observer(() => {
  const { UserStore } = useStores();
  return (
    <>
      {UserStore.currentUser ? <></> : <Tips>请先登录再上传</Tips>}
      <UpLoader />
    </>
  );
});

export default Home;
