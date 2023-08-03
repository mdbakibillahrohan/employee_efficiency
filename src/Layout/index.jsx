import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    UndoOutlined
  } from '@ant-design/icons';
  import { 
    Button, 
    Layout, 
    Menu,
    Row,
    Col,
    Card,
    theme 
  } from 'antd';
  import { useNavigate } from 'react-router-dom';
  import { useDispatch ,useSelector} from 'react-redux';
  import { useState,useEffect } from 'react';
  import SiderMain from './Sider';
  import ContentMain from './Content';
  import HeaderMain from './Header';
  import { getAllMenus } from '../Redux/features/Menus';
import getMenuLists from '../utils/getMenus';
  const { Header, Sider, Content } = Layout;


  const MainLayout = ({}) => {
    const dispatch=useDispatch();
    const {isCollapsed}=useSelector((state)=>state.tags);
    const [collapsed, setCollapsed] = useState(false);
    const history=useNavigate();
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    useEffect(()=>{
      let UserId=localStorage.getItem("UserId");
      let GroupId=localStorage.getItem("GroupId");

      getAllMenuLists(UserId,GroupId);
    },[])

    const getAllMenuLists=async(UserId,GroupId)=>{
      let MenuLists=[];
      MenuLists=await getMenuLists(UserId,GroupId);

      if(MenuLists.length){
        dispatch(getAllMenus(MenuLists));
      }
    }

    return (
      <>
        <Layout 
        style={{ minHeight: "100vh",overflow:"hidden" }}
        >
          <SiderMain collapsed={isCollapsed} />
          <Layout>
            <HeaderMain 
            collapsed={isCollapsed} 
            setCollapsed={setCollapsed}
            colorBgContainer={colorBgContainer}
            />

            <ContentMain 
            collapsed={isCollapsed}
            colorBgContainer={colorBgContainer}
            />
          </Layout>
        </Layout>
      </>
    );
  };
  export default MainLayout;