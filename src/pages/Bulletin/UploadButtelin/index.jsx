import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import React from "react";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: false,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  showUploadList: true,
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const UploadBulletin = () => {
  return (
    <>
      <h3 className="text-center text-2xl my-5">Upload Buletin</h3>
      <div className="px-52">
        <Dragger {...props} className="">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      </div>
    </>
  );
};
export default UploadBulletin;
