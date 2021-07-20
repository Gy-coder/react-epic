import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";

const Home: React.FC = observer(() => {
  const { UserStore } = useStores();
  return (
    <>
      <h1>
        {UserStore.currentUser ? (
          <>Hello {UserStore.currentUser.attributes.username}</>
        ) : (
          "用户没有登陆"
        )}
      </h1>
    </>
  );
});

export default Home;
