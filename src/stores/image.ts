import { observable, action, makeObservable } from "mobx";
import { Uploader } from "../models";

class ImageStore {
  constructor() {
    makeObservable(this);
  }
  @observable fileName: string = "";
  @observable file: File | null = null;
  @observable isUploading: boolean = false;
  @observable serverFile: File | null = null;
  @action setFileName(newFileName: string) {
    this.fileName = newFileName;
  }
  @action setFile(newFile: File) {
    this.file = newFile;
  }
  @action upload() {
    this.isUploading = true;
    this.serverFile = null;
    return new Promise((resolve, reject) => {
      Uploader.add(this.file as File, this.fileName)
        // @ts-ignore
        .then((serverFile: File) => {
          this.serverFile = serverFile;
          resolve(serverFile);
        })
        .catch((error) => reject(error))
        .finally(() => (this.isUploading = false));
    });
  }
  @action reset() {
    this.isUploading = false;
    this.serverFile = null;
  }
}

export default new ImageStore();
