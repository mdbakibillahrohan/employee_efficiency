import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import menuConfig from "../../config/menuConfig";
import "./index.css";
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const menus = [
  {
    Id: 1,
    ModuleId: 1,
    ModuleName: "Bulletine",
    IconName: "fa-solid fa-store",
    children: [
      {
        id: 1,
        MenuId: 1,
        name: "Upload Bulletin",
        IconName: "fa-solid fa-upload",
        path: "bulletin/upload",
      },
      {
        id: 2,
        MenuId: 2,
        name: "See Bulletin",
        IconName: "fa-solid fa-layer-group",
        path: "bulletin/show",
      },
    ],
  },
  {
    id: 1,
    MenuId: 1,
    name: "Add Donner",
    IconName: "fa-sharp fa-solid fa-user-plus",
    path: "store/addDonner",
  },
];
let test = "FileAddOutlined";

const SiderMain = ({ collapsed }) => {
  const location = useLocation();
  let { pathname } = location;

  const MenuLists = useSelector((state) => state.menu.menus);

  const roles = localStorage.getItem("role");
  const filterMenu = menuConfig.filter((mnu) => mnu.roles.includes(roles));
  const [menuLists, setMenulists] = useState([]);

  useEffect(() => {
    // let MenuLists=sessionStorage.getItem("MenuLists");
    // MenuLists=JSON.parse(MenuLists)
    // //console.log(MenuLists.length)
    if (menus.length) {
      let menuNode = getMenuNodeReduce(menus);
      setMenulists(menuNode);
    }
  }, []);

  // Menu lists reduce
  const getMenuNodeReduce = (menuListss) => {
    return menuListss.reduce((pre, item) => {
      if (!item.ModuleId) {
        pre = [
          ...pre,
          <Menu.Item
            key={item.path}
            icon={
              <div>
                <i className={`${item.IconName}`}></i>
              </div>
            }
          >
            <Link to={item.path}>
              <strong>{item.name}</strong>
            </Link>
          </Menu.Item>,
        ];
      } else {
        pre = [
          ...pre,
          <SubMenu
            key={item.ModuleId}
            icon={
              <div>
                <i className={`${item.IconName}`}></i>
              </div>
            }
            title={item.ModuleName}
          >
            {getMenuNodeReduce(item.children)}
          </SubMenu>,
        ];
      }
      return pre;
    }, []);
  };
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={`${collapsed ? "collapsed-sidebar" : "expand-sidebar"}`}
        style={{
          backgroundColor: "#fff",
          paddingTop: "10px",
        }}
      >
        <div className="logo" />
        <Menu
          style={{
            height: "100vh",
          }}
          theme="light"
          mode="inline"
          selectedKeys={[pathname ? pathname.substr(1) : ""]}
          defaultSelectedKeys={["1"]}
        >
          {menuLists}
        </Menu>
      </Sider>
    </>
  );
};
export default SiderMain;
