import React from "react";

const About: React.FC = () => {
  return (
    <>
      <h1>About</h1>
      <p>欢迎您使用banana-epic，这是一个简单的在线图床项目</p>
      <p>
        使用之前您需要注册一个账号，使用该账号登陆之后您可以通过上传图片，并且通过输入值来改变图片的大小
      </p>
      <p>您无需担心您的图片会丢失，我们保存了您的历史上传记录</p>
      <p>
        同样您也无需担心隐私信息的泄漏，我们无需您在准册时提交您的隐私相关信息
      </p>
      <p>最后祝您使用愉快</p>
      <strong>Thanks you</strong>
    </>
  );
};

export default About;
