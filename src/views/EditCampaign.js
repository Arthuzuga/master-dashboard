import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Card, Avatar, Collapse, Empty, Breadcrumb } from "antd";

import { Icon } from '@iconify/react';
import trashAlt from '@iconify/icons-fa-regular/trash-alt';
import plusSquare from '@iconify/icons-fa-regular/plus-square';

import { EditAndDelete } from "../Containers";
import { AddPlayerForm, AddNPCForm} from "../Templates";

import savePlayerInfo from "../redux/actions/save_playerInfo";
import selectCampaign from "../redux/actions/select_campaign";
import saveCampaign from "../redux/actions/save_campaign";
import selectSession from "../redux/actions/select_session";

const { Panel } = Collapse;

const PlayerItem = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 padding: 1rem;
`;

const PlayerInfo = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 word-break: break-all;
`;
const PlayerInfoTitle = styled.span`
 font-weight: bold;
`;

const CampaignSection = styled.section`
 margin: 1rem 0;
 padding: 1rem 0;
 border-bottom: 1px solid #c7c7c7;
`;

const SessionItem = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 14px;
 padding: 1rem 0.5rem;
`;

const AvatarWrapper = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
  span {
    font-weight: 600;
  }
`

const SessionsListItem = ({ title, onClick, onDelete }) => (
 <SessionItem>
  <span>{title}</span>
  <EditAndDelete onEdit={onClick} onDelete={onDelete}/>
 </SessionItem>
);

const PlayersListItem = ({
 name,
 character,
 avatar,
 classType,
 raceType,
 level,
 onClick,
 onDelete
}) => (
 <PlayerItem>
  <AvatarWrapper onClick={onClick}>
   <Avatar src={avatar} size="large" style={{ marginRight: "1rem" }} />
   <PlayerInfo>
    <PlayerInfoTitle>Personagem:</PlayerInfoTitle>
    <span>{character}</span>
   </PlayerInfo>
  </AvatarWrapper>
  <PlayerInfo>
   <PlayerInfoTitle>Jogador:</PlayerInfoTitle>
   <span>{name}</span>
  </PlayerInfo>
  <PlayerInfo>
   <PlayerInfoTitle>Raça:</PlayerInfoTitle>
   <span>{raceType}</span>
  </PlayerInfo>
  <PlayerInfo>
   <PlayerInfoTitle>Classe:</PlayerInfoTitle>
   <span>{classType}</span>
  </PlayerInfo>
  <PlayerInfo>
   <PlayerInfoTitle>Nível:</PlayerInfoTitle>
   <span>{level}</span>
  </PlayerInfo>
  <PlayerInfo>
    <StyledIcon icon={trashAlt} onClick={onDelete}/>
  </PlayerInfo>
 </PlayerItem>
);

const NPCListItem = ({
 age,
 raceType,
 alignment,
 ideal,
 bond,
 flaws,
 onClick,
 onDelete,
}) => (
 <>
  <PlayerItem>
   <PlayerInfo>
    <PlayerInfoTitle>Idade:</PlayerInfoTitle>
    <span>{age}</span>
   </PlayerInfo>
   <PlayerInfo>
    <PlayerInfoTitle>Raça:</PlayerInfoTitle>
    <span>{raceType}</span>
   </PlayerInfo>
   <PlayerInfo>
    <PlayerInfoTitle>Alinhamento:</PlayerInfoTitle>
    <span>{alignment}</span>
   </PlayerInfo>
   <PlayerInfo>
    <PlayerInfoTitle>Ideais:</PlayerInfoTitle>
    <span>{ideal}</span>
   </PlayerInfo>
   <PlayerInfo>
    <PlayerInfoTitle>Laços:</PlayerInfoTitle>
    <span>{bond}</span>
   </PlayerInfo>
   <PlayerInfo>
    <PlayerInfoTitle>Falhas:</PlayerInfoTitle>
    <span>{flaws}</span>
   </PlayerInfo>
   <EditAndDelete onEdit={onClick} onDelete={onDelete}/>
  </PlayerItem>
 </>
);

const EditCampaign = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const campaignSelected = useSelector(state => state.selectedCampaign)
  const campaignList = useSelector(state => state.campaigns)

 const [campaign, setCampaign] = useState("");
 const [npcSelected, setNPCSelection] = useState("");
 const [addPlayerFormVisible, setPlayerFormVisible] = useState(false);
 const [addNPCFormVisible, setNPCFormVisible] = useState(false);


 useEffect(() => {
     setCampaign(campaignSelected);
 }, [campaignSelected]);

 const editAllCampaigns = (url,newCampaignData ) => {
    const campaignEdited = campaignList.filter((camp) => camp.url !== url)
    const newCampaigns = [...campaignEdited, newCampaignData]
    dispatch(saveCampaign(newCampaigns))
 }

 const OpenAddPlayerForm = () => {
  setPlayerFormVisible(true);
 };

 const redirectToPlayerSheet = (playerInfo) => {
   const {
    character, 
    name,
    classType,
    raceType,
    level
   } = playerInfo
  dispatch(savePlayerInfo({
    characterName: character,
    playerName: name,
    classType,
    raceType,
    level,
  }))
  history.push("/teste")
 }

 const AddPlayer = ({
  id,
  avatar,
  name,
  character,
  classType,
  raceType,
  level,
  email,
 }) => {
  const newPlayer = {
   id,
   avatar,
   name,
   character,
   classType,
   raceType,
   level,
   email,
  };

  const newPlayers = [...campaign.players, newPlayer];
  const newCampaignData = {
    ...campaign,
    players: newPlayers
  }
  setCampaign(newCampaignData)
  dispatch(selectCampaign(newCampaignData))
  editAllCampaigns(newCampaignData.url, newCampaignData)
  setPlayerFormVisible(false);
 };

 const AddNPC = ({
  id,
  name,
  age,
  raceType,
  alignment,
  ideal,
  bond,
  flaw,
  background,
  affiliation,
  items,
 }) => {
  const newNPC = {
   id,
   name,
   age,
   raceType,
   alignment,
   ideal,
   bond,
   flaw,
   background,
   affiliation,
   items,
  };

  const newNPCs = [...campaign.npcs, newNPC];
  const newCampaignData = {
    ...campaign,
    npcs: newNPCs
  }
  setCampaign(newCampaignData)
  dispatch(selectCampaign(newCampaignData))
  editAllCampaigns(newCampaignData.url, newCampaignData)
  setNPCFormVisible(false);
 };

 const DeletePlayer = (id) => {
  const filteredPlayers = campaign.players.filter((player) => player.id !== id);
  const newCampaignData = {
    ...campaign,
    players: filteredPlayers
  }
  setCampaign(newCampaignData)
  dispatch(selectCampaign(newCampaignData))
  editAllCampaigns(newCampaignData.url, newCampaignData)
  setPlayerFormVisible(false);
 };
 
 const DeleteNPC = (id) => {
  const filteredNPC = campaign.npcs.filter((npc) => npc.id !== id);
  const newCampaignData = {
    ...campaign,
    npcs: filteredNPC
  }
  setCampaign(newCampaignData)
  dispatch(selectCampaign(newCampaignData))
  editAllCampaigns(newCampaignData.url, newCampaignData)
 };
 const DeleteSession = (id) => {
  const filteredSessions = campaign.sessions.filter((session) => session.id !== id);
  const newCampaignData = {
    ...campaign,
    sessions: filteredSessions
  }
  setCampaign(newCampaignData)
  dispatch(selectCampaign(newCampaignData))
  editAllCampaigns(newCampaignData.url, newCampaignData)
 };

 const { title, system, players, sessions, npcs  } = campaign || {
  title: "",
  system: "",
  players :[],
  sessions :[],
  npcs :[],
 };
 return (
  <Card title={title} bordered={false} style={{ width: "100%" }}>
    <Breadcrumb>
      <Breadcrumb.Item>
        <span 
          style={{cursor: "pointer"}} 
          onClick={() => history.push("/campaigns")}
          >
            Campanhas
        </span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{title}</Breadcrumb.Item>
    </Breadcrumb>
    <CampaignSection>
      <h1>SISTEMA</h1>
      <span>{system}</span>
    </CampaignSection>
    <CampaignSection>
      <SectionHeader>
        <span>JOGADORES</span>
        <StyledIcon
          height="16" 
          icon={plusSquare}        
          onClick={OpenAddPlayerForm}
          style={{marginLeft: "1rem"}}
        />
        <AddPlayerForm
          visible={addPlayerFormVisible}
          onClose={() => setPlayerFormVisible(false)}
          onSubmit={AddPlayer}
          onDelete={DeletePlayer}
        />
      </SectionHeader>
    {
    players !== undefined && players.length > 0 ? (
      players.map(
      ({ avatar, name, character, classType, raceType, level, id }, index) => (
        <PlayersListItem
        key={index}
        avatar={avatar}
        name={name}
        character={character}
        classType={classType}
        raceType={raceType}
        level={level}
        onClick={() => redirectToPlayerSheet({
          character, 
          name,
          classType,
          raceType,
          level
        })}
        onDelete={() => DeletePlayer(id)}
        />
      )
    )
    ):(
      <PlayerItem>
        <Empty />
      </PlayerItem>
    )}
  </CampaignSection>
  <CampaignSection>
    <SectionHeader>
      <span>SESSÕES</span>
      <StyledIcon
        height="16" 
        icon={plusSquare}        
        onClick={() => history.push("/sessions/newSession")}
        style={{marginLeft: "1rem"}}
      />
    </SectionHeader>
    <Collapse accordion bordered={false}>
    {
    sessions !== undefined && sessions.length > 0 ?
    sessions.map((session) => (
      <Panel key={session.id} header={session.title}>
      <SessionsListItem
        title={`${session.description} da sessão ${title}`}
        onClick={() => {
          dispatch(selectSession(session))
          history.push('/sessions/editSession')
        }}
        onDelete={() => DeleteSession(session.id)}
      />
      </Panel>
    )) : (
      <PlayerItem>
        <Empty />
      </PlayerItem>
    )}
    </Collapse>
  </CampaignSection>
  <CampaignSection>
    <SectionHeader>
      <span>NPCs</span>
      <StyledIcon
        height="16" 
        icon={plusSquare}
        onClick={() => setNPCFormVisible(true)}
        style={{marginLeft: "1rem"}}
      />

      <AddNPCForm
        visible={addNPCFormVisible}
        onClose={() => setNPCFormVisible(false)}
        onSubmit={AddNPC}
        onDelete={DeleteNPC}
        npcDefault={npcSelected}
      />
    </SectionHeader>
    <Collapse accordion bordered={false}>
    {
    npcs !== undefined && npcs.length > 0 ?
    npcs.map(
      ({ id, name, age, raceType, alignment, ideal, bond, flaw }) => (
      <Panel key={id} header={name}>
        <NPCListItem
        age={age}
        alignment={alignment}
        raceType={raceType}
        ideal={ideal}
        bond={bond}
        flaws={flaw}
        onClick={() => {
          setNPCSelection({ id, name, age, raceType, alignment, ideal, bond, flaw })
          setNPCFormVisible(true)
        }}
        onDelete={() => DeleteNPC(id)}
        />
      </Panel>
      )
    ): (
      <PlayerItem>
        <Empty />
      </PlayerItem>
    )}
    </Collapse>
  </CampaignSection>
  </Card>
 );
};

export default EditCampaign;
