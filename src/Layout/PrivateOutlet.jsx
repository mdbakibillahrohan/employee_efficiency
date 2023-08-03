import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  let userName = localStorage.getItem("token");
  // return userName?<Outlet />:<Navigate to="/login" replace />
  return <Outlet />;
};
export default PrivateLayout;
