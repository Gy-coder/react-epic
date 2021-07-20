import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { useStores } from "../stores";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const Login: React.FC = () => {
  const { AuthStore } = useStores();
  const histroy = useHistory();
  const onFinish = (values: any) => {
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.login()
      .then(() => {
        histroy.push("/");
      })
      .catch(() => {
        console.log("登陆失败 什么都不做");
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const validateUsername = (rule: any, value: string) => {
    if (/\W/.test(value)) return Promise.reject("只能是数字、字母或下划线");
    if (value.length < 4 || value.length > 10)
      return Promise.reject("长度为4～10个字符");
    return Promise.resolve();
  };
  return (
    <Wrapper>
      <Title>登陆</Title>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: "输入用户名" },
            { validator: validateUsername },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: "输入密码" },
            { min: 4, message: "最少4个字符" },
            { max: 16, message: "最多不超过16个字符" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default Login;
