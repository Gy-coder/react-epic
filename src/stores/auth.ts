import { observable, action, makeObservable } from "mobx";
import { Auth } from "../models";
import UserStore from "./user";

class AuthStore {
  constructor() {
    makeObservable(this);
  }
  @observable values: { username: string; password: string } = {
    username: "",
    password: "",
  };
  @action setUsername(username: string) {
    this.values.username = username;
  }
  @action setPassword(password: string) {
    this.values.password = password;
  }
  @action login() {
    return new Promise((resolve, reject) => {
      Auth.login(this.values.username, this.values.password)
        .then((user) => {
          UserStore.pullUser();
          resolve(user);
        })
        .catch((error) => {
          UserStore.resetUser();
          reject(error);
        });
    });
  }
  @action logout() {
    Auth.logout();
    UserStore.resetUser();
  }
  @action resister() {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password)
        .then((user) => {
          UserStore.pullUser();
          resolve(user);
        })
        .catch((error) => {
          UserStore.resetUser();
          reject(error);
        });
    });
  }
}

export default new AuthStore();
