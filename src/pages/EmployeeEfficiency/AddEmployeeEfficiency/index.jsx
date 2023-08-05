import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Table,
  Tabs,
} from "antd";

import React, { useState } from "react";
const { Search } = Input;
const { TextArea } = Input;

const AddEmployeeEfficiency = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [tabPosition, setTabPosition] = useState(1);
  const columns = [
    {
      title: "Employee Id",
      dataIndex: "employee_id",
      key: "employee_id",
      filters: [
        {
          text: "All Employee",
          value: "",
        },
        {
          text: "Line Employee",
          value: "",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "30%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },

    {
      title: "Action",
      key: "action",
      render: (record, index) => (
        <Button
          onClick={() => {
            setOpen(true);
          }}
          style={{ background: "#1677ff" }}
          type="primary"
        >
          Efficiency
        </Button>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      employee_id: "em001",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "2",
      employee_id: "em002",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "3",
      employee_id: "em003",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "4",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
  ];

  const onSearch = (e) => {
    console.log(e);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div>
        <h2 className="text-center text-lg font-bold mb-5">
          Employee Efficiency
        </h2>
        <div>
          <div className="flex justify-end w-full">
            <Search
              className="my-4"
              style={{
                width: 300,
                background: "#1677ff",
              }}
              placeholder="Search by employee id or name"
              onSearch={onSearch}
              enterButton
            />
          </div>
          <Table pagination={false} columns={columns} dataSource={data} />
        </div>

        <Modal
          title="Efficiency Edit"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1200}
        >
          <div>
            <div className="h-[27rem]">
              <Form
                name="basic"
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                style={{
                  maxWidth: "100%",
                }}
                initialValues={{
                  remember: true,
                  name: "Rohan",
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Tabs
                  animated={true}
                  defaultActiveKey={1}
                  onChange={(e) => {
                    setActiveTab(e);
                  }}
                  activeKey={activeTab}
                  items={[
                    {
                      label: "Employee Info",
                      key: "1",
                      children: (
                        <div className="grid grid-cols-4 gap-x-3">
                          <Form.Item
                            label="Emp Eff No: "
                            name="emp_eff_no"
                            rules={[
                              {
                                required: true,
                                message: "Please input your name!",
                              },
                            ]}
                          >
                            <Input disabled={true} />
                          </Form.Item>
                          <Form.Item label="Date: ">
                            <DatePicker className="w-full" />
                          </Form.Item>
                          <Form.Item label="Line: ">
                            <Select>
                              <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="Working Line: ">
                            <Select>
                              <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="Buyer: ">
                            <Select>
                              <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="Style: ">
                            <Select>
                              <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="Machine: ">
                            <Select>
                              <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="Process: ">
                            <Select>
                              <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                          </Form.Item>
                          <Form.Item
                            label="Employee Name: "
                            name="employee_name"
                            rules={[
                              {
                                required: true,
                                message: "Please input your name!",
                              },
                            ]}
                          >
                            <Input disabled={true} />
                          </Form.Item>
                          <Form.Item
                            label="Employee ID: "
                            name="employee_id"
                            rules={[
                              {
                                required: true,
                                message: "Please input your name!",
                              },
                            ]}
                          >
                            <Input disabled={true} />
                          </Form.Item>
                          <Form.Item label="Designation: ">
                            <Select>
                              <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="Remarks">
                            <TextArea rows={4} />
                          </Form.Item>
                        </div>
                      ),
                    },
                    {
                      label: "Hourly Performance",
                      key: "2",
                      children: (
                        <>
                          <table
                            border={2}
                            className="w-full text-sm text-center text-gray-500 dark:text-gray-400"
                          >
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                <th scope="col">Hours</th>
                                <th scope="col">H1</th>
                                <th scope="col">H2</th>
                                <th scope="col">H3</th>
                                <th scope="col">H4</th>
                                <th scope="col">H5</th>
                                <th scope="col">H6</th>
                                <th scope="col">H7</th>
                                <th scope="col">H8</th>
                                <th scope="col">H9</th>
                                <th scope="col">H10</th>
                                <th scope="col">Total</th>
                                <th scope="col">Average</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Target Quantitiy
                                </th>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  120
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  120
                                </td>
                              </tr>
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Production Quantitiy
                                </th>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  120
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  120
                                </td>
                              </tr>
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Check Quantitiy
                                </th>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  120
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  120
                                </td>
                              </tr>
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Defect Quantitiy
                                </th>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center"
                                    type="text"
                                  />
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  120
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  120
                                </td>
                              </tr>
                              <tr className="bg-yellow-500 border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Efficiency(%)
                                </th>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="text-black my-1">120</td>
                                <td className="text-black my-1">120</td>
                              </tr>
                              <tr className="bg-yellow-500 border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Defect(%)
                                </th>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="p-0 w-16">
                                  <input
                                    className="border-[0.1rem] h-11 border-gray-950 w-16 text-black text-center bg-transparent"
                                    type="text"
                                  />
                                </td>
                                <td className="text-black my-1">120</td>
                                <td className="text-black my-1">120</td>
                              </tr>
                            </tbody>
                          </table>
                        </>
                      ),
                    },
                  ]}
                />
              </Form>
            </div>
            <div className="flex w-full justify-between">
              <Button type="primary">Previous</Button>
              <Button
                onClick={() => {
                  const newTabposition = tabPosition + 1;
                  setTabPosition(newTabposition);
                  console.log("new tab position ", newTabposition);
                  console.log("tab position ", tabPosition);
                }}
                type="primary"
              >
                Next
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default AddEmployeeEfficiency;
