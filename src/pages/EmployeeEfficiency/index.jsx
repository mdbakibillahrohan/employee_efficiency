import { Navigate, Outlet, useLocation } from "react-router-dom";

const EmployeeEfficiencyIndex = () => {
  const loaction = useLocation();
  const { pathname } = loaction;
  return (
    <div>
      {pathname === "/efficiency" ? (
        <Navigate replace to="/efficiency/add-employee" />
      ) : (
        ""
      )}
      <Outlet />
    </div>
  );
};

export default EmployeeEfficiencyIndex;
