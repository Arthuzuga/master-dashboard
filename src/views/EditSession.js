import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Input, Collapse } from "antd";
import sessionList from "../mock/sessionList";

const mock = {
 id: "1",
 title: "As Chamas da Noite",
 description: "Descrição",
 chapters: [
  {
   id: "1",
   text: "",
   playlist: [],
   npcs: [],
   magicItems: [],
   challengers: [],
   monsters: [],
  },
 ],
};

const { TextArea } = Input;
const { Panel } = Collapse;

const SessionSection = styled.section`
 padding: 1rem 0;
 border-bottom: 1px solid #c7c7c7;
 display: flex;
 flex-direction: column;
 font-size: 16px;
`;

const SessionInfo = styled.h2`
 font-size: 14px;
`;

// const EditButton = styled.button`
//  border: 1px solid #767676;
//  border-radius: 8px;
//  background-color: #373737;
//  color: white;
//  font-weight: 400;
//  cursor: pointer;
// `;
const DeleteButton = styled.button`
 border: none;
 border-radius: 8px;
 background-color: #b21f66;
 color: white;
 font-weight: 400;
 cursor: pointer;
 margin-left: 1rem;
`;
const PlayerItem = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 width: 100%;
 padding: 1rem;
`;

const PlayerInfo = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 word-break: normal;
 margin: 1rem 0;
 padding: 0.5rem;
 border-bottom: 1px solid #c7c7c7;
`;

const PlayerInfoTitle = styled.span`
 font-weight: bold;
`;

const EditSession = () => {
 const [id, setId] = useState("");
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const [chapters, setChapters] = useState([]);
 //  const [newChapter, setNewChapter] = useState("");

 useEffect(() => {
  setId((Math.random() * 100).toFixed(0));
  console.log(id);
  const chapterList = sessionList[0].chapters;
  setChapters(chapterList);
 }, [id]);

 return (
  <Card title="Nova sessão" bordered={false} style={{ width: "100%" }}>
   <SessionSection>
    <h1>Informações gerais</h1>
    <div>
     <SessionInfo>Título da Sessão</SessionInfo>
     <Input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      style={{ width: "48%", marginBottom: "1rem" }}
     />
    </div>
    <div>
     <SessionInfo>Descrição da Sessão</SessionInfo>
     <TextArea
      rows={4}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      style={{ width: "48%", marginBottom: "1rem" }}
     />
    </div>
   </SessionSection>
   <SessionSection>
    <h1>
     <span>Capítulos</span>
     <DeleteButton onClick={() => console.log("oi")}>Adicionar</DeleteButton>
    </h1>
    <Collapse accordion bordered={false}>
     {chapters.map(
      ({ id, text, npcs, playlist, monsters, challengers, magicItems }) => (
       <Panel key={id} header={`capítulo ${id}`}>
        <PlayerItem>
         <PlayerInfo>
          <PlayerInfoTitle>Texto:</PlayerInfoTitle>
          <span>{text}</span>
         </PlayerInfo>

         <PlayerInfo>
          <PlayerInfoTitle>NPCs:</PlayerInfoTitle>
          <div>
           {npcs.length > 0 ? (
            npcs.map(({ id, name }) => (
             <div key={id} style={{ margin: "1rem 0" }}>
              <PlayerInfoTitle>Nome:</PlayerInfoTitle>
              <span> {name}</span>
             </div>
            ))
           ) : (
            <div style={{ margin: "1rem 0" }}>
             <PlayerInfoTitle>Não há NPCs selecionados</PlayerInfoTitle>
            </div>
           )}
          </div>
         </PlayerInfo>
         <PlayerInfo>
          <PlayerInfoTitle>Músicas:</PlayerInfoTitle>
          <div>
           {playlist.length > 0 ? (
            playlist.map(({ id, title }) => (
             <div key={id} style={{ margin: "1rem 0" }}>
              <PlayerInfoTitle>Título:</PlayerInfoTitle>
              <span> {title}</span>
             </div>
            ))
           ) : (
            <div style={{ margin: "1rem 0" }}>
             <PlayerInfoTitle>Não há músicas selecionadas</PlayerInfoTitle>
            </div>
           )}
          </div>
         </PlayerInfo>
         <PlayerInfo>
          <PlayerInfoTitle>Monstros:</PlayerInfoTitle>
          <div>
           {monsters.length > 0 ? (
            monsters.map(({ id, title }) => (
             <div key={id} style={{ margin: "1rem 0" }}>
              <PlayerInfoTitle>Título:</PlayerInfoTitle>
              <span> {title}</span>
             </div>
            ))
           ) : (
            <div style={{ margin: "1rem 0" }}>
             <PlayerInfoTitle>Não há monstros selecionados</PlayerInfoTitle>
            </div>
           )}
          </div>
         </PlayerInfo>
        </PlayerItem>
        <PlayerItem>
         <PlayerInfo>
          <PlayerInfoTitle>Desafios:</PlayerInfoTitle>
          <div>
           {challengers.length > 0 ? (
            challengers.map(({ id, title }) => (
             <div key={id} style={{ margin: "1rem 0" }}>
              <PlayerInfoTitle>Título:</PlayerInfoTitle>
              <span> {title}</span>
             </div>
            ))
           ) : (
            <div style={{ margin: "1rem 0" }}>
             <PlayerInfoTitle>Não há desafios selecionados</PlayerInfoTitle>
            </div>
           )}
          </div>
         </PlayerInfo>
        </PlayerItem>
        <PlayerItem>
         <PlayerInfo>
          <PlayerInfoTitle>Itens Mágicos:</PlayerInfoTitle>
          <div>
           {magicItems.length > 0 ? (
            magicItems.map(({ id, title }) => (
             <div key={id} style={{ margin: "1rem 0" }}>
              <PlayerInfoTitle>Título:</PlayerInfoTitle>
              <span> {title}</span>
             </div>
            ))
           ) : (
            <div style={{ margin: "1rem 0" }}>
             <PlayerInfoTitle>
              Não há itens mágicos selecionados
             </PlayerInfoTitle>
            </div>
           )}
          </div>
         </PlayerInfo>
        </PlayerItem>
       </Panel>
      )
     )}
    </Collapse>
   </SessionSection>
  </Card>
 );
};

export default EditSession;
