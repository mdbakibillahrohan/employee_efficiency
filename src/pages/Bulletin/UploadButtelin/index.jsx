import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import React, { useState } from "react";
import * as XLSX from "xlsx";
const { Dragger } = Upload;

const UploadBulletin = () => {
  const [previewData, setPreviewData] = useState([]);
  const props = {
    name: "file",
    multiple: false,
    showUploadList: true,
  };

  const customRequest = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetname = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetname];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      if (parsedData) {
        onSuccess("Ok");
        setPreviewData(parsedData);
        console.log(parsedData);
      }
    };
  };

  return (
    <>
      <h3 className="text-center text-2xl my-5">Upload Buletin</h3>
      <div className="px-52">
        <Dragger customRequest={customRequest} {...props} className="h-80">
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
        <div className="mt-4">
          <span className="text-2xl">Preview: </span>
          {previewData.length > 0 ? (
            <table border={1}>
              <thead>
                <tr>
                  {Object.keys(previewData[4]).map((el, index) => {
                    return <th key={index}>{el}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {previewData.map((data, index) => {
                  return (
                    <tr key={index}>
                      {Object.keys(previewData[0]).map((el, index) => {
                        return <td key={index}>{data[el]}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default UploadBulletin;
