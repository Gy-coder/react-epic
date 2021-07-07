import { observable, action, makeObservable } from "mobx";

class AuthStore {
  constructor() {
    makeObservable(this);
  }
  @observable isLogin: boolean = false;
  @observable isLoading: boolean = false;
  @observable values: { username: string; password: string } = {
    username: "",
    password: "",
  };

  @action setIsLogin(isLogin: boolean) {
    this.isLogin = isLogin;
  }
  @action setUsername(username: string) {
    this.values.username = username;
  }
  @action setPassword(password: string) {
    this.values.password = password;
  }
  @action login() {
    console.log("登陆中...");
    this.isLoading = true;
    setTimeout(() => {
      console.log("登陆成功");
      this.isLogin = true;
      this.isLoading = false;
    }, 3000);
  }
  @action logout() {
    console.log("已注销");
  }
  @action resister() {
    // TODO
    console.log("注册中...");
    this.isLoading = true;
    setTimeout(() => {
      console.log("注册成功");
      this.isLogin = true;
      this.isLoading = false;
    }, 3000);
  }
}

export { AuthStore };
