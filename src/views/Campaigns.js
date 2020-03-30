import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Card, Modal, Input } from "antd";

import campaign from "../mock/campaignList";

const { confirm } = Modal;

const CampaignList = styled.div`
 width: 100%;
`;

const EditButton = styled.button`
 border: 1px solid #767676;
 border-radius: 8px;
 background-color: #373737;
 color: white;
 font-weight: 400;
 cursor: pointer;
`;
const DeleteButton = styled.button`
 border: none;
 border-radius: 8px;
 background-color: #b21f66;
 color: white;
 font-weight: 400;
 cursor: pointer;
 margin-left: 1rem;
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
 <campaign>
  <span>{title}</span>
  <div>
   <EditButton onClick={onClick}>Editar</EditButton>
   <DeleteButton onClick={onDelete}>Apagar</DeleteButton>
  </div>
 </campaign>
);

const Campaigns = () => {
 const history = useHistory();
 const [campaignList, setcampaignList] = useState(campaign);
 const [createcampaign, setCreatecampaign] = useState(false);
 const [inputTitle, setinputTitle] = useState("");
 const [inputSystem, setinputSystem] = useState("");

 const Deletecampaign = (url) => {
  const filteredcampaign = campaignList.filter(
   (campaign) => campaign.url !== url
  );
  setcampaignList(filteredcampaign);
 };
 const Addcampaign = (title, system, url) => {
  const newcampaign = {
   title,
   url,
   system,
  };
  const newcampaigns = [...campaignList, newcampaign];
  setcampaignList(newcampaigns);
  setCreatecampaign(false);
 };

 const showDeleteConfirm = (url) =>
  confirm({
   title: "Tem certeza em apagar essa sessão?",
   okText: "Apagar",
   okType: "danger",
   cancelText: "Cancelar",
   content:
    "Apagando essa sessão não será possível recuperar seus dados depois",
   onOk() {
    Deletecampaign(url);
   },
  });

 return (
  <>
   <Card title="Campanhas" bordered={false} style={{ width: "100%" }}>
    <CampaignList>
     {campaignList.map(({ title, url }) => (
      <CampaignListItem
       key={url}
       title={title}
       onClick={() => history.push(url)}
       onDelete={() => showDeleteConfirm(url)}
      />
     ))}
    </CampaignList>
    <AddCampaignDiv>
     <EditButton onClick={() => setCreatecampaign(true)}>
      Criar Campanha
     </EditButton>
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
        const lowerTitle = inputTitle.toLowerCase();
        const url = lowerTitle.replace(" ", "");
        Addcampaign(inputTitle, inputSystem, `/campaign/${url}`);
       }
      }}
     />

     <AddCampaignDiv>
      <EditButton onClick={() => setCreatecampaign(false)}>Cancelar</EditButton>
      <DeleteButton
       onClick={() => {
        const lowerTitle = inputTitle.toLowerCase();
        const url = lowerTitle.replace(" ", "");
        Addcampaign(inputTitle, inputSystem, `/campaign/${url}`);
       }}
      >
       Adicionar Conta
      </DeleteButton>
     </AddCampaignDiv>
    </Card>
   )}
  </>
 );
};

export default Campaigns;
