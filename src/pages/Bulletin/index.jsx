import { Navigate, Outlet, useLocation } from "react-router-dom";

const BulletinIndex = () => {
  const loaction = useLocation();
  const { pathname } = loaction;
  return (
    <div>
      {pathname === "/bulletin" ? (
        <Navigate replace to="/bulletin/upload" />
      ) : (
        ""
      )}
      <Outlet />
    </div>
  );
};

export default BulletinIndex;
