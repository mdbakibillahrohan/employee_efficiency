import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import BulletinIndex from "../../pages/Bulletin";
import BulletinRouteMap from "../../pages/Bulletin/routeMap";
import "./index.css";

const { Content } = Layout;

const ContentMain = ({ colorBgContainer, collapsed }) => {
  const roles = localStorage.getItem("role");
  return (
    <>
      {/* <SwitchTransition>
                <CSSTransition
                //key={location.pathname}
                //nodeRef={nodeRef}
                timeout={2000}
                classNames="page"
                unmountOnExit
                > */}
      <Content
        className={`${collapsed ? "collapsed-content" : "expand-content"}`}
        style={{
          margin: "10px",
          marginTop: "64px",
          padding: 10,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        <Routes>
          <Route path="/bulletin" element={<BulletinIndex />}>
            {BulletinRouteMap.map((data, i) => {
              return (
                <Route
                  key={data.path}
                  path={data.path}
                  element={data.component}
                />
              );
            })}
          </Route>
        </Routes>
      </Content>
      {/* </CSSTransition>
            </SwitchTransition> */}
    </>
  );
};
export default ContentMain;
