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

import React, { useReducer, useState } from "react";
import Calculator from "./Calculator";
import { employeeReducer, initialState } from "./Calculator/store";
import GlobalEfficiency from "./GlobalEfficiency";
const { Search } = Input;
const { TextArea } = Input;

const AddEmployeeEfficiency = () => {
  const [state, localDispatch] = useReducer(employeeReducer, initialState);
  const [open, setOpen] = useState(false);
  const [globalEfficiencyOpen, setGlobalEfficiencyOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  // useEffect(() => {
  //   calculateAverageAndTotal();
  // }, [state]);
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
    {
      key: "5",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "6",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "7",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "8",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "9",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "10",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "11",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "12",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "13",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "14",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "15",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "16",
      employee_id: "em004",
      name: "Mr. Karim",
      designation: "Operator",
    },
    {
      key: "17",
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

  const calculateAverageAndTotal = () => {
    // here started calculating target quantitiy
    let targetQuantityTotal = 0;
    let targetQuantityAverage = 0;
    let targetQuantity = [...state.targetQuantity];
    targetQuantity.forEach((el) => {
      targetQuantityTotal += el;
    });
    targetQuantityAverage = targetQuantityTotal / targetQuantity.length;
    localDispatch({
      type: "TOTAL_AND_AVERAGE_CHANGE",
      payload: {
        targetQuantityTotal,
        targetQuantityAverage,
      },
    });
  };

  const onTargetQuantityChangeHandler = async (e, i) => {
    const payload = {
      index: i,
      value: e.target.value,
    };
    localDispatch({
      type: "EDIT_TARGET_QUANTITY",
      payload: payload,
    });
  };
  const onProductionQuantityChangeHandler = (e, i) => {
    const payload = {
      index: i,
      value: e.target.value,
    };
    localDispatch({
      type: "EDIT_PRODUCTION_QUANTITY",
      payload: payload,
    });
  };
  const onCheckQuantityChangeHandler = (e, i) => {
    const payload = {
      index: i,
      value: e.target.value,
    };
    localDispatch({
      type: "EDIT_CHECK_QUANTITY",
      payload: payload,
    });
  };
  const onDefectQuantityChangeHandler = (e, i) => {
    const payload = {
      index: i,
      value: e.target.value,
    };
    localDispatch({
      type: "EDIT_DEFECT_QUANTITY",
      payload: payload,
    });
  };

  const onLineChange = () => {};

  return (
    <>
      <div>
        <h2 className="text-center text-lg font-bold mb-5">
          Employee Efficiency
        </h2>
        <div>
          <div className="flex justify-between items-center w-full">
            <div className="flex">
              <div className="mx-2">
                <Select
                  className="w-36"
                  showSearch
                  placeholder="Select a Line"
                  optionFilterProp="children"
                  onChange={onLineChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </div>
              <div className="mx-2 w-36">
                <Select
                  className="w-36"
                  showSearch
                  placeholder="Select a bulletin"
                  optionFilterProp="children"
                  onChange={onLineChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </div>
              <Button className="mx-2" type="primary">
                Apply for all employee
              </Button>
              <Button
                onClick={() => {
                  setGlobalEfficiencyOpen(true);
                }}
                className="mx-2"
                type="primary"
              >
                Global Efficiency
              </Button>
            </div>

            <div>
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
            <div className="flex justify-end">
              <Button
                disabled={activeTab == "1"}
                className="mx-4"
                type="primary"
                onClick={() => {
                  localDispatch({
                    type: "ADD_HOUR",
                    payload: 0,
                  });
                }}
              >
                Add HOUR
              </Button>
              <Button
                disabled={activeTab == "1"}
                className="mx-4"
                type="primary"
                onClick={() => {
                  localDispatch({
                    type: "REMOVE_HOUR",
                    payload: 0,
                  });
                }}
              >
                REMOVE HOUR
              </Button>
            </div>
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
                          <Calculator
                            onCheckQuantityChangeHandler={
                              onCheckQuantityChangeHandler
                            }
                            onProductionQuantityChangeHandler={
                              onProductionQuantityChangeHandler
                            }
                            onTargetQuantityChangeHandler={
                              onTargetQuantityChangeHandler
                            }
                            onDefectQuantityChangeHandler={
                              onDefectQuantityChangeHandler
                            }
                          />
                        </>
                      ),
                    },
                  ]}
                />
              </Form>
            </div>
            <div className="flex w-full justify-between">
              <Button
                onClick={() => {
                  setActiveTab("1");
                }}
                type="primary"
                disabled={activeTab == "1"}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  setActiveTab("2");
                }}
                type="primary"
                disabled={activeTab == "2"}
              >
                Next
              </Button>
            </div>
          </div>
        </Modal>
        <Modal
          title="Efficiency Edit"
          centered
          open={globalEfficiencyOpen}
          onOk={() => setGlobalEfficiencyOpen(false)}
          onCancel={() => setGlobalEfficiencyOpen(false)}
          width={1400}
        >
          <GlobalEfficiency data={data} />
        </Modal>
      </div>
    </>
  );
};
export default AddEmployeeEfficiency;
