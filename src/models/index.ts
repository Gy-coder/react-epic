import AV, { User } from "leancloud-storage";

AV.init({
  appId: "j99WOvGj2EsogIFuaQUjN1kB-MdYXbMMI",
  appKey: "7HqldeykbezPyc9OPn9r3SQh",
});

console.log("start....");

const Auth = {
  register(username: string, password: string) {
    let user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then(
        (loginedUser) => resolve(loginedUser),
        (error) => reject(error)
      );
    });
  },
  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(
        (loginedUser) => resolve(loginedUser),
        (error) => reject(error)
      );
    });
  },
  logout() {
    User.logOut();
  },
  getCurrentUser() {
    return User.current();
  },
};

const Uploader = {
  add(file: File, fileName: string) {
    const item = new AV.Object("Image");
    const avFile = new AV.File(fileName, file);
    item.set("fileName", fileName);
    item.set("owner", User.current());
    item.set("url", avFile);
    return new Promise((resolve, reject) => {
      item.save().then(
        (serverFile) => resolve(serverFile),
        (error) => reject(error)
      );
    });
  },
  find({ page = 0, limit = 10 }) {
    const query = new AV.Query("Image");
    query.include("owner");
    query.limit(limit);
    query.skip(page * limit);
    query.descending("createAt");
    query.equalTo("owner", AV.User.current());
    return new Promise((resolve, reject) => {
      query
        .find()
        .then((results) => resolve(results))
        .catch((error) => reject(error));
    });
  },
};

// @ts-ignore
window.Uploader = Uploader;

export { Auth, Uploader };
