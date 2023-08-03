import { Button, Card, Col, Form, Input, Row } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import configureAxios from "../../utils/axios";
import "./index.css";

const Login = () => {
  const history = useNavigate();
  useEffect(() => {
    configureAxios();
  }, []);

  const handleLogin = (state) => {
    let data = {
      userName: state.userName,
      password: state.password,
    };
    history("/");

    // axios.post('/login',JSON.stringify(data))
    // .then((response)=>{
    //     if(response.status===200 && response.data.IsSuccess){
    //         //console.log(response);
    //         localStorage.setItem("token", JSON.stringify(response.data.token));
    //         localStorage.setItem("UserId",response.data.id);
    //         localStorage.setItem("GroupId",response.data.groupId);
    //         //console.log(response.data)
    //         Success("Login Success.",{},{})
    //         history('/');
    //     }
    // }).catch((error)=>{
    //     Warning("User Id or Password are wrong",{},{});
    // })
  };
  return (
    <>
      <Row
        style={{
          display: "flex",
        }}
      >
        <Col span={24} className="login-container">
          <Card
            style={{
              width: "35vw",
            }}
          >
            <Row>
              <Col span={24}>
                <Form
                  wrapperCol={{
                    span: 18,
                  }}
                  labelCol={{
                    span: 6,
                  }}
                  autoComplete="off"
                  onFinish={handleLogin}
                >
                  <Form.Item
                    colon={false}
                    tooltip={{
                      placement: "bottom",
                      title: "User Name",
                    }}
                    label="User Name"
                    labelAlign="left"
                    name="userName"
                    rules={[
                      {
                        required: "true",
                        message: "User Name Is Required.",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    colon={false}
                    tooltip={{
                      placement: "bottom",
                      title: "Password",
                    }}
                    label="Password"
                    labelAlign="left"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Password is required.",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 18,
                      span: 6,
                    }}
                  >
                    <Row>
                      <Col
                        span={24}
                        style={{
                          textAlign: "right",
                        }}
                      >
                        <Button type="primary" htmlType="submit">
                          Login
                        </Button>
                      </Col>
                    </Row>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Login;
