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
import { employeeReducer, initialState } from "./store";
const { Search } = Input;
const { TextArea } = Input;

const AddEmployeeEfficiency = () => {
  const [state, localDispatch] = useReducer(employeeReducer, initialState);
  const [open, setOpen] = useState(false);
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
                          <table
                            border={2}
                            className="w-full text-sm text-center text-gray-500 dark:text-gray-400"
                          >
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                <th scope="col">Hours</th>
                                {state.hourLists.map((e, i) => {
                                  return (
                                    <th key={i} scope="col">
                                      {e.title}
                                    </th>
                                  );
                                })}
                                <th scope="col">Total</th>
                                <th scope="col">Average</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* here started the target quantity code  */}
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Target Quantitiy
                                </th>
                                {state.targetQuantity.map((e, i) => {
                                  return (
                                    <td key={i} className="p-0 w-16">
                                      <input
                                        className="h-11 w-16 text-black text-center border-0"
                                        type="text"
                                        onChange={(e) => {
                                          onTargetQuantityChangeHandler(e, i);
                                        }}
                                        name={e.value}
                                        value={e}
                                      />
                                    </td>
                                  );
                                })}

                                <td className="bg-lime-600 text-black my-1">
                                  {state.total.target_quantity}
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  {state.average.target_quantity}
                                </td>
                              </tr>
                              {/* here ended the target quantity  */}

                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Production Quantitiy
                                </th>
                                {state.productionQuantity.map((e, i) => {
                                  return (
                                    <td key={i} className="p-0 w-16">
                                      <input
                                        className="h-11 w-16 text-black text-center border-0"
                                        type="text"
                                        name={e.value}
                                        value={e}
                                        onChange={(e) => {
                                          onProductionQuantityChangeHandler(
                                            e,
                                            i
                                          );
                                        }}
                                      />
                                    </td>
                                  );
                                })}

                                <td className="bg-lime-600 text-black my-1">
                                  {state.total.production_quantity}
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  {state.average.production_quantity}
                                </td>
                              </tr>

                              {/* here started the check quantity  */}
                              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Check Quantitiy
                                </th>
                                {state.checkQuantity.map((e, i) => {
                                  return (
                                    <td key={i} className="p-0 w-16">
                                      <input
                                        className="h-11 w-16 text-black text-center border-0"
                                        type="text"
                                        name={e.value}
                                        onChange={(e) => {
                                          onCheckQuantityChangeHandler(e, i);
                                        }}
                                        value={e}
                                      />
                                    </td>
                                  );
                                })}
                                <td className="bg-lime-600 text-black my-1">
                                  {state.total.check_quantity}
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  {state.average.check_quantity}
                                </td>
                              </tr> */}
                              {/* here ended the check quantity  */}

                              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Defect Quantitiy
                                </th>
                                {state.defectQuantity.map((e, i) => {
                                  return (
                                    <td key={i} className="p-0 w-16">
                                      <input
                                        className="h-11 w-16 text-black text-center border-0"
                                        type="text"
                                        name={e.value}
                                        onChange={(e) => {
                                          onDefectQuantityChangeHandler(e, i);
                                        }}
                                        value={e}
                                      />
                                    </td>
                                  );
                                })}
                                <td className="bg-lime-600 text-black my-1">
                                  {state.total.defect_quantity}
                                </td>
                                <td className="bg-lime-600 text-black my-1">
                                  {state.average.defect_quantity}
                                </td>
                              </tr> */}
                              <tr className="bg-yellow-500 border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Efficiency(%)
                                </th>
                                {state.efficiency.map((e, i) => {
                                  return (
                                    <td key={i} className="p-0 w-16 text-black">
                                      {e}
                                    </td>
                                  );
                                })}
                                <td className="text-black my-1">
                                  {state.total.efficiency}
                                </td>
                                <td className="text-black my-1">
                                  {state.average.efficiency}
                                </td>
                              </tr>
                              {/* <tr className="bg-yellow-500 border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Defect(%)
                                </th>
                                {state.defect.map((e, i) => {
                                  return (
                                    <td key={i} className="p-0 w-16 text-black">
                                      {e}
                                    </td>
                                  );
                                })}
                                <td className="text-black my-1">
                                  {state.total.defect}
                                </td>
                                <td className="text-black my-1">
                                  {state.average.defect}
                                </td>
                              </tr> */}
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
      </div>
    </>
  );
};
export default AddEmployeeEfficiency;
