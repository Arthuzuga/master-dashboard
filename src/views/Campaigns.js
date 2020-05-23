import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import styled from "styled-components";
import { Card, Modal, Input, Empty } from "antd";

import saveCampaign  from '../redux/actions/save_campaign'
import selectCampaign  from '../redux/actions/select_campaign'

import { Button } from '../Component'
import { EditAndDelete } from '../Containers'

const { confirm } = Modal;

const CampaignList = styled.div`
 width: 100%;
`;

const Campaign = styled.div`
 margin: 1rem 0;
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 16px;
`;

const AddCampaignDiv = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 margin-top: 4rem;
 border-top: 1px solid #c7c7c7;
 padding-top: 1rem;
`;

const CampaignListItem = ({ title, onClick, onDelete }) => (
 <Campaign>
  <span>{title}</span>
  <EditAndDelete onEdit={onClick} onDelete={onDelete}/>
 </Campaign>
);

const Campaigns = () => {
 const history = useHistory();
 const campaignList = useSelector(state => state.campaigns)
 const dispatch = useDispatch()

 const [createcampaign, setCreatecampaign] = useState(false);
 const [inputTitle, setinputTitle] = useState("");
 const [inputSystem, setinputSystem] = useState("");

 const Deletecampaign = (url) => {
  const filteredcampaign = campaignList.filter(
   (campaign) => campaign.url !== url
  );
  dispatch(saveCampaign(filteredcampaign))
 };

 const sortArray = (array) => {
  return array.sort((a,b) => {
      if (a.id < b.id) return -1
      if (a.id > b.id) return 1
      return 0
  })
}

 const Addcampaign = (title, system, url) => {
  const newcampaign = {
    id: campaignList.length +1,
   title,
   url,
   system,
   players: [],
   sessions :[],
   npcs :[],
  };
  const newcampaigns = sortArray([...campaignList, newcampaign]);
  dispatch(saveCampaign(newcampaigns));
  setCreatecampaign(false);
 };

 const showDeleteConfirm = (url) =>
  confirm({
   title:  "Tem certeza em apagar essa sessão?",
   okText: "Apagar",
   okType: "danger",
   cancelText: "Cancelar",
   content:
    "Apagando essa sessão não será possível recuperar seus dados depois",
   onOk() {
    Deletecampaign(url);
   },
  });

  const createSlug = (title) => {
    return title.toLowerCase().replace(/\s/g, "");
  }

  const handleSelectedCampaing = (url) => {
    const selectedCampaign = campaignList.filter(ca => ca.url === url)[0]
    dispatch(selectCampaign(selectedCampaign))
    history.push(url)
  }

 return (
  <>
   <Card title="Campanhas" bordered={false} style={{ width: "100%" }}>
    <CampaignList>
     {
       campaignList !== undefined && campaignList.length > 0? 
      campaignList.map(({ title, url }) => (
      <CampaignListItem
       key={url}
       title={title}
       onClick={() => handleSelectedCampaing(url)}
       onDelete={() => showDeleteConfirm(url)}
      />
     )):(
      <div style={{ width: "100%" }}>
        <Empty />
     </div>
     )}
    </CampaignList>
    <AddCampaignDiv>
     <Button 
        backgroundColor="#373737" 
        textColor="white"
        onClick={() => setCreatecampaign(true)}
    >
      Criar Campanha
     </Button>
    </AddCampaignDiv>
   </Card>

   {createcampaign && (
    <Card
     title="Criar Campanha"
     bordered={false}
     style={{ width: "100%", marginTop: "2rem" }}
    >
     <Input
      addonBefore="Título da Campanha"
      value={inputTitle}
      onChange={(e) => setinputTitle(e.target.value)}
      style={{ marginBottom: "1rem" }}
     />
     <Input
      addonBefore="Sistema"
      value={inputSystem}
      onChange={(e) => setinputSystem(e.target.value)}
      onKeyUp={(e) => {
       if (e.keyCode === 13) {
        const url = createSlug(inputTitle);
        Addcampaign(inputTitle, inputSystem, `/campaigns/${url}`);
       }
      }}
     />

     <AddCampaignDiv>
      <Button 
        backgroundColor="#373737" 
        textColor="white" 
        onClick={() => setCreatecampaign(false)}
      >
        Cancelar
      </Button>
      <Button 
      backgroundColor="#b21f66" 
      textColor="white" 
       onClick={() => {
        const url = createSlug(inputTitle);
        Addcampaign(inputTitle, inputSystem, `/campaigns/${url}`);
       }}
      >
       Adicionar Conta
      </Button>
     </AddCampaignDiv>
    </Card>
   )}
  </>
 );
};

export default Campaigns;
