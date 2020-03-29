import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Card, Modal, Input } from "antd";

import campain from "../mock/campainList";

const { confirm } = Modal;

const CampainList = styled.div`
 width: 100%;
`;

const Campain = styled.div`
 margin: 1rem 0;
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 16px;
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

const AddCampainDiv = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 margin-top: 4rem;
 border-top: 1px solid #c7c7c7;
 padding-top: 1rem;
`;

const CampainListItem = ({ title, onClick, onDelete }) => (
 <Campain>
  <span>{title}</span>
  <div>
   <EditButton onClick={onClick}>Editar</EditButton>
   <DeleteButton onClick={onDelete}>Apagar</DeleteButton>
  </div>
 </Campain>
);

const Campains = () => {
 const history = useHistory();
 const [campainList, setcampainList] = useState(campain);
 const [createcampain, setCreatecampain] = useState(false);
 const [inputTitle, setinputTitle] = useState("");
 const [inputSystem, setinputSystem] = useState("");

 const Deletecampain = (url) => {
  console.log();
  const filteredcampain = campainList.filter((campain) => campain.url !== url);
  setcampainList(filteredcampain);
 };
 const Addcampain = (title, system, url) => {
  const newcampain = {
   title,
   url,
   system,
  };
  const newcampains = [...campainList, newcampain];
  setcampainList(newcampains);
  setCreatecampain(false);
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
    Deletecampain(url);
   },
  });

 return (
  <>
   <Card title="Campanhas" bordered={false} style={{ width: "100%" }}>
    <CampainList>
     {campainList.map(({ title, url }) => (
      <CampainListItem
       key={url}
       title={title}
       onClick={() => history.push(url)}
       onDelete={() => showDeleteConfirm(url)}
      />
     ))}
    </CampainList>
    <AddCampainDiv>
     <EditButton onClick={() => setCreatecampain(true)}>
      Criar Campanha
     </EditButton>
    </AddCampainDiv>
   </Card>

   {createcampain && (
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
        Addcampain(inputTitle, inputSystem, `/campain/${url}`);
       }
      }}
     />

     <AddCampainDiv>
      <EditButton onClick={() => setCreatecampain(false)}>Cancelar</EditButton>
      <DeleteButton
       onClick={() => {
        const lowerTitle = inputTitle.toLowerCase();
        const url = lowerTitle.replace(" ", "");
        Addcampain(inputTitle, inputSystem, `/campain/${url}`);
       }}
      >
       Adicionar Conta
      </DeleteButton>
     </AddCampainDiv>
    </Card>
   )}
  </>
 );
};

export default Campains;
