import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";
import saveMonsters from "./redux/actions/save_monsters";
import saveEquipment from "./redux/actions/save_equipments";

import { Home, Campaigns, EditCampaign, EditSession } from "./views";
import { Drawer } from "./Component";
import "antd/dist/antd.css";
import { getMonsters } from "./services/getMonsters";
import { getEquipmentsCategory } from "./services/getEquipments";

import Character from './Templates/Sheets/Character'

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

const App = (props) => {
 const { saveMonster, saveEquipmentCategory } = props;
 const [drawerVisible, setDrawerVisibility] = useState(true);

 useEffect(() => {
  getMonsters().then((res) => saveMonster(res.results));
  getEquipmentsCategory().then((res) => saveEquipmentCategory(res.results));
 }, [saveMonster, saveEquipmentCategory]);

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
       <Link to="/campaigns">
        <span className="nav-text">Campanhas</span>
       </Link>
      </Menu.Item>
      <Menu.Item key="3">
       <Link to="/teste">
        <span className="nav-text">Teste de Feature</span>
       </Link>
      </Menu.Item>
     </Menu>
    </Drawer>
    <Layout>
     <Content>
      <Wrapper>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/campaigns/:id" component={EditCampaign} />
        <Route path="/campaigns" component={Campaigns} />
        <Route path="/sessions/newSession" component={EditSession} />
        <Route path="/teste" component={Character} />
       </Switch>
      </Wrapper>
     </Content>
    </Layout>
   </FullHeightLayout>
  </Router>
 );
};

const mapDispatchToProps = (dispatch) => {
 return {
  saveMonster: (monstersArray) => dispatch(saveMonsters(monstersArray)),
  saveEquipmentCategory: (equipmentsArray) =>
   dispatch(saveEquipment(equipmentsArray)),
 };
};

export default connect(null, mapDispatchToProps)(App);
