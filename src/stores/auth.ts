import { observable, action, makeObservable } from "mobx";
import { Auth } from "../models";
import { message } from "antd";
import HistoryStore from "./history";
import UserStore from "./user";
import ImageStore from "./image";
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
          message.success("登陆成功");
          UserStore.pullUser();
          resolve(user);
        })
        .catch((error) => {
          message.error("登陆失败");
          UserStore.resetUser();
          reject(error);
        });
    });
  }
  @action logout() {
    Auth.logout();
    UserStore.resetUser();
    HistoryStore.reset();
    ImageStore.reset();
  }
  @action resister() {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password)
        .then((user) => {
          message.success("注册成功");
          UserStore.pullUser();
          resolve(user);
        })
        .catch((error) => {
          message.error("注册失败");
          UserStore.resetUser();
          reject(error);
        });
    });
  }
}

export default new AuthStore();
