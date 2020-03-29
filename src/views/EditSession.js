import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Input, Collapse, Modal } from "antd";
import sessionList from "../mock/sessionList";
import AddMusicForm from "../Templates/AddMusicForm";
import AddNPCSessionForm from "../Templates/AddNPCSessionForm";

const mockChapter = {
 id: (Math.random() * 1000).toFixed(0),
 text: "",
 playlist: [],
 npcs: [],
 magicItems: [],
 challengers: [],
 monsters: [],
};

const { TextArea } = Input;
const { Panel } = Collapse;
const { confirm } = Modal;

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

const EditButton = styled.button`
 border: 1px solid #767676;
 border-radius: 8px;
 background-color: #373737;
 color: white;
 font-weight: 400;
 cursor: pointer;
 margin-left: 1rem;
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
const PlayerItem = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 width: 100%;
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

const PlayerInfoTitle = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 font-weight: bold;
`;

const DeleteChapterDiv = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 padding-top: 1rem;
`;

const EditSession = () => {
 const [id, setId] = useState("");
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const [chapters, setChapters] = useState([]);
 const [addMusicModalOpen, setMusicModalOpen] = useState(false);
 const [addNPCModalOpen, setNPCModalOpen] = useState(false);
 //  const [npcs, setNPCs] = useState([]);
 //  const [monsters, setMonsters] = useState([]);
 //  const [challengers, setChallengers] = useState([]);
 //  const [magicItems, setMagicItems] = useState([]);

 useEffect(() => {
  setId((Math.random() * 100).toFixed(0));
  const chapterList = sessionList[0].chapters;
  setChapters(chapterList);
 }, []);

 const AddChapter = () => {
  const newChapters = [...chapters, mockChapter];
  setChapters(newChapters);
 };

 const setMusics = (songs, index) => {
  const newChapter = {
   ...chapters[index],
   playlist: songs,
  };
  chapters.splice(index, 1);
  const newChapters = [...chapters, newChapter];
  setChapters(newChapters);
 };
 const setNPCs = (npc, index) => {
  const newChapter = {
   ...chapters[index],
   npcs: npc,
  };
  chapters.splice(index, 1);
  const newChapters = [...chapters, newChapter];
  setChapters(newChapters);
 };

 const showDeleteConfirm = (id) =>
  confirm({
   title: "Tem certeza em apagar esse capítulo?",
   okText: "Apagar",
   okType: "danger",
   cancelText: "Cancelar",
   content:
    "Apagando essa sessão não será possível recuperar seus dados depois",
   onOk() {
    DeleteChapter(id);
   },
  });
 const DeleteChapter = (id) => {
  const newChapters = chapters.filter((chapter) => chapter.id !== id);
  setChapters(newChapters);
 };

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
     <DeleteButton onClick={() => AddChapter()}>Adicionar</DeleteButton>
    </h1>
    <Collapse accordion bordered={false}>
     {chapters.map(
      (
       { id, text, npcs, playlist, monsters, challengers, magicItems },
       indexChapter
      ) => (
       <Panel key={id} header={`capítulo ${id}`}>
        <PlayerItem>
         <PlayerInfo>
          <PlayerInfoTitle>
           <span>Título: </span>
           <EditButton>Editar</EditButton>
          </PlayerInfoTitle>
          <span>{text}</span>
         </PlayerInfo>

         <PlayerInfo>
          <PlayerInfoTitle>
           <span>NPCs: </span>
           <EditButton onClick={() => setNPCModalOpen(true)}>Editar</EditButton>
           <AddNPCSessionForm
            visible={addNPCModalOpen}
            onClose={() => setNPCModalOpen(false)}
            onSubmit={(npc) => {
             setNPCs(npc, indexChapter);
             setNPCModalOpen(false);
            }}
            npcsDefault={npcs}
           />
          </PlayerInfoTitle>
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
          <PlayerInfoTitle>
           <span>Músicas: </span>
           <EditButton onClick={() => setMusicModalOpen(true)}>
            Editar
           </EditButton>
           <AddMusicForm
            visible={addMusicModalOpen}
            onClose={() => setMusicModalOpen(false)}
            onSubmit={(songs) => {
             setMusics(songs, indexChapter);
             setMusicModalOpen(false);
            }}
            musicsDefault={playlist}
           />
          </PlayerInfoTitle>
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
          <PlayerInfoTitle>
           <span>Monstros: </span>
           <EditButton>Editar</EditButton>
          </PlayerInfoTitle>
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
          <PlayerInfoTitle>
           <span>Desafios: </span>
           <EditButton>Editar</EditButton>
          </PlayerInfoTitle>
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
          <PlayerInfoTitle>
           <span>Itens Mágicos: </span>
           <EditButton>Editar</EditButton>
          </PlayerInfoTitle>
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
        <DeleteChapterDiv>
         <DeleteButton onClick={() => showDeleteConfirm(id)}>
          Deletar Capítulo
         </DeleteButton>
        </DeleteChapterDiv>
       </Panel>
      )
     )}
    </Collapse>
   </SessionSection>
   <DeleteChapterDiv>
    <DeleteButton onClick={() => console.log("")}>Salvar Sessão</DeleteButton>
   </DeleteChapterDiv>
  </Card>
 );
};

export default EditSession;
