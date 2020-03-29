import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home, Campains, EditCampain } from "./views";
import { Drawer } from "./Component";
import "antd/dist/antd.css";

const { Content } = Layout;

const FullHeightLayout = styled(Layout)`
 height: 100vh;
`;

const Logo = styled.div`
 margin: 2rem;
 width: 4rem;
 height: 4rem;
 background-color: #c62828;
 border-radius: 50%;
 text-align: center;
 font-size: 32px;
 font-weight: 600;
 display: flex;
 justify-content: center;
 align-items: center;
`;

const Wrapper = styled.div`
 margin: 2rem;
`;

const App = () => {
 const [drawerVisible, setDrawerVisibility] = useState(true);
 return (
  <Router>
   <FullHeightLayout hasSider>
    <Drawer
     onClose={() => setDrawerVisibility(false)}
     visibility={drawerVisible}
    >
     <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Logo>DM</Logo>
      <Menu.Item key="1">
       <Link to="/">
        <span className="nav-text">Home</span>
       </Link>
      </Menu.Item>
      <Menu.Item key="2">
       <Link to="/campains">
        <span className="nav-text">Campanhas</span>
       </Link>
      </Menu.Item>
     </Menu>
    </Drawer>
    <Layout>
     <Content>
      <Wrapper>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/campains/:id" component={EditCampain} />
        <Route path="/campains" component={Campains} />
       </Switch>
      </Wrapper>
     </Content>
    </Layout>
   </FullHeightLayout>
  </Router>
 );
};

export default App;
