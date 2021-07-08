import { observable, action, makeObservable } from "mobx";
import { Auth } from "../models";
import { User } from "leancloud-storage";

class UserStore {
  constructor() {
    makeObservable(this);
  }
  @observable currentUser: User | null = null;

  @action pullUser() {
    this.currentUser = Auth.getCurrentUser();
  }
  @action resetUser() {
    this.currentUser = null;
  }
}

export default new UserStore();
