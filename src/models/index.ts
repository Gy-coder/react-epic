import AV, { User } from "leancloud-storage";

AV.init({
  appId: "69iInJ8ccuDDz4JtMfcp9jYx-gzGzoHsz",
  appKey: "wJDL00T3LCTIIUh1u6PRu4Ye",
  serverURL: "https://69iinj8c.lc-cn-n1-shared.com",
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

export { Auth };
