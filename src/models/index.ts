import AV, { Query, User } from "leancloud-storage";

AV.init({
  appId: "69iInJ8ccuDDz4JtMfcp9jYx-gzGzoHsz",
  appKey: "wJDL00T3LCTIIUh1u6PRu4Ye",
  serverURL: "https://69iinj8c.lc-cn-n1-shared.com",
});

console.log("start....");

let user = new User();
user.setUsername("hungry");
user.setPassword("password");
user.signUp().then(
  (loginedUser) => {
    console.log("注册成功");
    console.log(loginedUser);
  },
  (error) => {
    console.log(error);
  }
);

export default {};
