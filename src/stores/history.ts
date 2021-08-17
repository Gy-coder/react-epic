import { observable, action, makeObservable } from "mobx";
import { Uploader } from "../models";

class HistoryStore {
  constructor() {
    makeObservable(this);
  }
  @observable list: any[] = [];
  @observable isLoading = false;
  @observable hasMore = true;
  @observable page = 0;
  @observable limit = 10;

  @action append(newList: any) {
    this.list = this.list.concat(newList);
  }

  @action find() {
    this.isLoading = true;
    Uploader.find({ page: this.page, limit: this.limit })
      .then((newList) => {
        this.append(newList);
        this.page += 1;
        if ((newList as any[]).length < this.limit) {
          this.hasMore = false;
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.isLoading = false));
  }
  @action reset() {
    this.list = [];
    this.isLoading = false;
    this.hasMore = true;
    this.page = 0;
  }
}

export default new HistoryStore();
