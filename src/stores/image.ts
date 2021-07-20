import { observable, action, makeObservable } from "mobx";
import { Uploader } from "../models";

class ImageStore {
  constructor() {
    makeObservable(this);
  }
  @observable fileName: string = "";
  @observable file: File | null = null;
  @observable isUploading: boolean = false;
  @action setFileName(newFileName: string) {
    this.fileName = newFileName;
  }
  @action setFile(newFile: File) {
    this.file = newFile;
  }
  @action upload() {
    this.isUploading = true;
    return new Promise((resolve, reject) => {
      Uploader.add(this.file as File, this.fileName)
        .then((serverFile) => resolve(serverFile))
        .catch((error) => reject(error))
        .finally(() => (this.isUploading = false));
    });
  }
}

export default new ImageStore();
