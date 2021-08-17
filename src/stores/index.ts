import { createContext, useContext } from "react";
import AuthStore from "./auth";
import UserStore from "./user";
import ImageStore from "./image";
import HistroyStore from "./history";

const context = createContext({
  AuthStore,
  UserStore,
  ImageStore,
  HistroyStore,
});

// @ts-ignore
window.stores = {
  AuthStore,
  UserStore,
  ImageStore,
  HistroyStore,
};

export const useStores = () => useContext(context);
