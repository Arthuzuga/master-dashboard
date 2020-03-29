import React from "react";
import { Layout, Drawer } from "antd";

const { Sider } = Layout;

const NavDrawer = ({ visibility, onClose, children }) => {
 return window.innerWidth > 786 ? (
  <Sider>{children}</Sider>
 ) : (
  <Drawer
   title="Menu"
   placement="left"
   closable={false}
   onClose={onClose}
   visible={visibility}
  >
   {children}
  </Drawer>
 );
};

export default NavDrawer;
