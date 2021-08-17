import React, { useRef } from "react";
import { observer, useLocalObservable } from "mobx-react";
import { useStores } from "../stores";
import { Upload, message, Spin } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Dragger } = Upload;

const Result = styled.div`
  margin-top: 30px;
  border: 1px dashed #ccc;
  padding: 20px;
`;

const H1 = styled.h1`
  margin: 20px 0;
  text-align: center;
`;

const Img = styled.img`
  max-width: 300px;
`;

const UpLoader: React.FC = observer(() => {
  const { ImageStore, UserStore } = useStores();
  /* @ts-ignore */
  const address: string = ImageStore.serverFile?.attributes.url.attributes.url;
  const store = useLocalObservable(() => ({
    width: "",
    height: "",
    get getWidth() {
      return store.width ? `/w/${store.width}` : "";
    },
    setWidth(width: string) {
      store.width = width;
    },
    get getHeight() {
      return store.height ? `/h/${store.height}` : "";
    },
    setHeight(height: string) {
      store.height = height;
    },
    get allAddress() {
      return (
        /* @ts-ignore */
        ImageStore.serverFile?.attributes.url.attributes.url +
        "?imageView2/0" +
        store.getWidth +
        store.getHeight
      );
    },
  }));
  const ref1 = useRef<HTMLInputElement | null>(null);
  const ref2 = useRef<HTMLInputElement | null>(null);

  const bindWidthChange = () => {
    console.log("bindWidthChange...");
    console.log(ref1.current ? ref1.current.value : "");
    ref1.current && store.setWidth(ref1.current.value);
  };

  const bindHeightChange = () => {
    ref2.current && store.setHeight(ref2.current.value);
  };

  const props = {
    beforeUpload: (file: File) => {
      ImageStore.setFile(file);
      ImageStore.setFileName(file.name);
      console.log(file);
      if (UserStore.currentUser === null) {
        message.warning("请先登录再上传！");
        return false;
      }
      if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(file.name)) {
        message.error("只能上传图片");
        return false;
      }
      if (file.size > 1024 * 1024) {
        message.error("只能上传最大1M的图片");
        return false;
      }
      ImageStore.upload()
        .then(() => message.success("上传成功"))
        .catch(() => message.error("上传失败"));
      return false;
    },
    showUploadList: false,
  };
  return (
    <>
      <Spin tip="上传中..." spinning={ImageStore.isUploading}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </Spin>

      {ImageStore.serverFile ? (
        <Result>
          <H1>上传结果</H1>
          <dl>
            <dt>线上地址</dt>
            {/* @ts-ignore */}
            <dd>
              <a target="_blank" href={address}>
                {address}
              </a>
            </dd>
            <dt>文件名</dt>
            <dd>{ImageStore.fileName}</dd>
            <dt>图片预览</dt>
            <dd>
              <Img src={address} />
            </dd>
            <dt>更改尺寸</dt>
            <dd>
              <input
                ref={ref1}
                placeholder="最大宽度(可选)"
                onChange={bindWidthChange}
              />
              <input
                ref={ref2}
                placeholder="最大高度(可选)"
                onChange={bindHeightChange}
              />
            </dd>
            <dt>预览地址</dt>
            <dd>
              
              <a target="_black" href={store.allAddress}>
                {store.allAddress}
              </a>{" "}
            </dd>
          </dl>
        </Result>
      ) : null}
    </>
  );
});

export default UpLoader;
