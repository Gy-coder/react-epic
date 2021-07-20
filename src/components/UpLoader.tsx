import React, { useRef } from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";

const UpLoader: React.FC = observer(() => {
  const { ImageStore } = useStores();
  const ref = useRef<HTMLInputElement | null>(null);
  const handleChange = () => {
    console.log(ref.current);
    if (ref.current && ref.current.files && ref.current.files.length > 0) {
      ImageStore.setFile(ref.current.files[0]);
      ImageStore.setFileName(ref.current.files[0].name);
      ImageStore.upload()
        .then(() => console.log("上传成功"))
        .catch(() => console.log("上传失败"));
    }
    // @ts-ignore
    window.file = ref.current;
  };
  return (
    <>
      <h1>文件上传</h1>
      <input type="file" ref={ref} onChange={handleChange} />
    </>
  );
});

export default UpLoader;
