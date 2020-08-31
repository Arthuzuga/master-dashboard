import React, { useEffect } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
import saveMonsters from "./redux/actions/save_monsters";
import saveEquipment from "./redux/actions/save_equipments";
import saveCampaign from "./redux/actions/save_campaign"
import selectCampaing from "./redux/actions/select_campaign"
import selectSession from "./redux/actions/select_session"

import { Home, Campaigns, EditCampaign, CreateSession } from "./views";
import "antd/dist/antd.css";
import { getMonsters } from "./services/getMonsters";
import { getEquipmentsCategory } from "./services/getEquipments";

import Character from './Templates/Sheets/Character'

const { Content } = Layout;

const FullHeightLayout = styled(Layout)`
 height: 100vh;
`;

const Wrapper = styled.div`
 margin: 2rem;

`;

const CustomLayout = styled(Layout)`
  margin-left: 5rem;
  @media only screen and (max-width:600px) {
   margin: 0;
 }
`

const CustomNav = styled.nav`
  
  position: fixed;
  /* background-color: #37474F; */
  background-color: #593563;
  z-index: 10;
  transition: width 400ms ease;

  &:hover {
    span {
      display: block;
    }
  }

  @media only screen and (min-width: 600px){
    top: 0;
    width: 5rem;
    height: 100vh;
    &:hover {
      width: 16rem;
      span {
        transition: opacity 200ms;
      }
      svg:last-child {
      transform: rotate(180deg);
      }
    }
  }

  @media only screen and (max-width: 600px){
    bottom: 0;
    width: 100vw;
    height: 5rem;
    &:hover {
      span {
        display: none;
      }
    }
  }
`

const CustomNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 600px){
    height: 100vh;
  }
  @media only screen and (max-width: 600px){
    flex-direction: row;
    justify-content: space-around;
  }
  
`

const CustomNavListItem = styled.li`
  &:last-child {
    margin-top: auto;
  }

  @media only screen and (min-width: 600px){
    width: 100%;
  }
  @media only screen and (max-width: 600px){
    width: 5rem;
  }
`

const CustomLink = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  height: 5rem;
  color: #FFAB00;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: 400ms;
  span {
    display: none;
    margin-left: 1rem;
    font-weight: 600;
    color: #FFE57F;
  }
  svg {
    min-width: 2rem;
    margin: 0 1.5rem;
    color: #FFAB00;
  }

  &:hover {
    filter: opacity(1);
    /* background-color: #78909C; */
    background-color: #7d318e;
  }

  /* @media only screen and (min-width: 600px){
    justify-content: center; 
  } */
  @media only screen and (max-width: 600px){
    justify-content: center; 
  }
`

const Logo = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  color: #FFE57F;
  /* background: #78909C; */
  background: #7d318e;
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
  
  span {
    transition: 200ms;
  }

  @media only screen and (min-width: 600px){
    svg {
    transform: rotate(0deg);
    transition: 200ms;
  }
  }
  @media only screen and (max-width: 600px){
    display: none; 
  }
`

const App = (props) => {
 const { saveMonster, saveEquipmentCategory } = props;
  const dispatch = useDispatch()


 useEffect(() => {
  getMonsters().then((res) => saveMonster(res.results));
  getEquipmentsCategory().then((res) => saveEquipmentCategory(res.results));
 }, [saveMonster, saveEquipmentCategory]);

 useEffect(() => {
   const rawSelectedCampaign = localStorage.getItem('selectedCampaign')
   const rawSelectedSession = localStorage.getItem('selectedSession')
   const rawCampaigns = localStorage.getItem('campaigns')

   if (rawCampaigns) {
    const campaigns = JSON.parse(rawCampaigns)
    dispatch(saveCampaign(campaigns))
   }

   if (rawSelectedCampaign) {
     const selectedCampaign = JSON.parse(rawSelectedCampaign)
     dispatch(selectCampaing(selectedCampaign))
   }

   if (rawSelectedSession) {
     const selectedSession = JSON.parse(rawSelectedSession)
     dispatch(selectSession(selectedSession))
   }

 },[dispatch])

 return (
  <Router>
   <FullHeightLayout hasSider>
     <CustomNav>
       <CustomNavList>
         <Logo class="logo">
          <CustomLink>
            <span class="link-text logo-text">MENU</span>
            <svg
              viewBox="0 0 448 512"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                ></path>
              </g>
            </svg>
          </CustomLink>
        </Logo>
         <CustomNavListItem>
          <CustomLink>
            <Link to="/" style={{display: "flex", alignItems: "center", textDecoration: 'none'}}>
              <svg viewBox="0 0 480 512">
                <path 
                  fill="currentColor" 
                  d="M106.75 215.06L1.2 370.95c-3.08 5 .1 11.5 5.93 12.14l208.26 22.07-108.64-190.1zM7.41 315.43L82.7 193.08 6.06 147.1c-2.67-1.6-6.06.32-6.06 3.43v162.81c0 4.03 5.29 5.53 7.41 2.09zM18.25 423.6l194.4 87.66c5.3 2.45 11.35-1.43 11.35-7.26v-65.67l-203.55-22.3c-4.45-.5-6.23 5.59-2.2 7.57zm81.22-257.78L179.4 22.88c4.34-7.06-3.59-15.25-10.78-11.14L17.81 110.35c-2.47 1.62-2.39 5.26.13 6.78l81.53 48.69zM240 176h109.21L253.63 7.62C250.5 2.54 245.25 0 240 0s-10.5 2.54-13.63 7.62L130.79 176H240zm233.94-28.9l-76.64 45.99 75.29 122.35c2.11 3.44 7.41 1.94 7.41-2.1V150.53c0-3.11-3.39-5.03-6.06-3.43zm-93.41 18.72l81.53-48.7c2.53-1.52 2.6-5.16.13-6.78l-150.81-98.6c-7.19-4.11-15.12 4.08-10.78 11.14l79.93 142.94zm79.02 250.21L256 438.32v65.67c0 5.84 6.05 9.71 11.35 7.26l194.4-87.66c4.03-1.97 2.25-8.06-2.2-7.56zm-86.3-200.97l-108.63 190.1 208.26-22.07c5.83-.65 9.01-7.14 5.93-12.14L373.25 215.06zM240 208H139.57L240 383.75 340.43 208H240z"
                  />
              </svg>
              <span className="nav-text">Home</span>
            </Link>
          </CustomLink>
         </CustomNavListItem>
         <CustomNavListItem>
          <CustomLink>
            <Link to="/campaigns" style={{display: "flex", alignItems: "center", textDecoration: 'none'}}>
              <svg  viewBox="0 0 512 512">
                <path 
                  fill="currentColor" 
                  d="M128.73 195.32l-82.81-51.76c-8.04-5.02-18.99-2.17-22.93 6.45A254.19 254.19 0 0 0 .54 239.28C-.05 248.37 7.59 256 16.69 256h97.13c7.96 0 14.08-6.25 15.01-14.16 1.09-9.33 3.24-18.33 6.24-26.94 2.56-7.34.25-15.46-6.34-19.58zM319.03 8C298.86 2.82 277.77 0 256 0s-42.86 2.82-63.03 8c-9.17 2.35-13.91 12.6-10.39 21.39l37.47 104.03A16.003 16.003 0 0 0 235.1 144h41.8c6.75 0 12.77-4.23 15.05-10.58l37.47-104.03c3.52-8.79-1.22-19.03-10.39-21.39zM112 288H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm0 128H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm77.31-283.67l-36.32-90.8c-3.53-8.83-14.13-12.99-22.42-8.31a257.308 257.308 0 0 0-71.61 59.89c-6.06 7.32-3.85 18.48 4.22 23.52l82.93 51.83c6.51 4.07 14.66 2.62 20.11-2.79 5.18-5.15 10.79-9.85 16.79-14.05 6.28-4.41 9.15-12.17 6.3-19.29zM398.18 256h97.13c9.1 0 16.74-7.63 16.15-16.72a254.135 254.135 0 0 0-22.45-89.27c-3.94-8.62-14.89-11.47-22.93-6.45l-82.81 51.76c-6.59 4.12-8.9 12.24-6.34 19.58 3.01 8.61 5.15 17.62 6.24 26.94.93 7.91 7.05 14.16 15.01 14.16zm54.85-162.89a257.308 257.308 0 0 0-71.61-59.89c-8.28-4.68-18.88-.52-22.42 8.31l-36.32 90.8c-2.85 7.12.02 14.88 6.3 19.28 6 4.2 11.61 8.9 16.79 14.05 5.44 5.41 13.6 6.86 20.11 2.79l82.93-51.83c8.07-5.03 10.29-16.19 4.22-23.51zM496 288h-96c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm0 128h-96c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zM240 177.62V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V177.62c-5.23-.89-10.52-1.62-16-1.62s-10.77.73-16 1.62zm-64 41.51V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V189.36c-12.78 7.45-23.84 17.47-32 29.77zm128-29.77V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V219.13c-8.16-12.3-19.22-22.32-32-29.77z"
                  />
              </svg>
              <span className="nav-text">Campanhas</span>
            </Link>
          </CustomLink>
         </CustomNavListItem>
         <CustomNavListItem>
          <CustomLink>
            <Link to="/teste" style={{display: "flex", alignItems: "center", textDecoration: 'none'}}>
              <svg viewBox="0 0 640 512">
                <path 
                  fill="currentColor" 
                  d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"
                  />
              </svg>
              <span className="nav-text">Teste de Feature</span>
            </Link>
          </CustomLink>
         </CustomNavListItem>
         <CustomNavListItem>
          <CustomLink>    
            <Link to="/" style={{display: "flex", alignItems: "center", textDecoration: 'none'}}>
              <svg viewBox="0 0 512 512">
                <path 
                  fill="currentColor" 
                  d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
                  />
              </svg>
              <span className="nav-text">Logout</span>
            </Link>
          </CustomLink>
          </CustomNavListItem>
       </CustomNavList>
     </CustomNav>
    {/* <Drawer
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
    </Drawer> */}
    <CustomLayout>
     <Content>
      <Wrapper>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/campaigns/player" component={Character} />
        <Route path="/campaigns/:id" component={EditCampaign} />
        <Route path="/campaigns" component={Campaigns} />
        <Route path="/sessions/editSession" component={CreateSession} />
        <Route path="/sessions/newSession" component={CreateSession} />
        <Route path="/teste" component={Character} />
       </Switch>
      </Wrapper>
     </Content>
    </CustomLayout>
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
