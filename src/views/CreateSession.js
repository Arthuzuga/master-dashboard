import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { Card, Input, Collapse, Modal } from "antd";
import { Icon } from '@iconify/react';
import plusSquare from '@iconify/icons-fa-regular/plus-square';

import selectCampaign from "../redux/actions/select_campaign";
import saveCampaign from "../redux/actions/save_campaign";

import { Button, TitleInfo } from "../Component"
import { 
    AddMusicForm, 
    AddNPCSessionForm, 
    AddChallengeForm, 
    AddDescriptionForm,
    MonstersInfo,
    ChallengeInfo,
    MusicInfo,
    DescriptionInfo,
    EquipmentInfo
} from "../Templates";

const chapterTemplate = {
 text: "",
 playlist: [],
 description:[],
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

const DeleteChapterDiv = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 padding-top: 1rem;
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  margin-left: 2rem;
`

const CreateSession = () => {
  const history = useHistory();
  const campaignSelected = useSelector(state => state.selectedCampaign)
  const sessionSelected = useSelector(state => state.selectedSession)
  const campaignList = useSelector(state => state.campaigns)
  const dispatch = useDispatch()


 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const [chapters, setChapters] = useState([]);
 const [addDescriptionModalOpen, setDescriptionModalOpen] = useState(false);
 const [addMusicModalOpen, setMusicModalOpen] = useState(false);
 const [addNPCModalOpen, setNPCModalOpen] = useState(false);
 const [addMonstersOpen, setMonstersOpen] = useState(false);
 const [addChallengeModalOpen, setChallengeModalOpen] = useState(false);
 const [addEquipModalOpen, setEquipModalOpen] = useState(false);
 const [sessionId, setSessionId] = useState("")

 useEffect(() => {
   if (sessionSelected.id !== undefined) {
    const {id, title, description, chapters } = sessionSelected
     setChapters(chapters);
     setTitle(title)
     setDescription(description)
     setSessionId(id)
   }
 }, [sessionSelected]);

 const AddChapter = () => {
  const newChapters = [...chapters, {
    ...chapterTemplate,
    id: (Math.random() * 1000).toFixed(0),
}];
  setChapters(newChapters);
 };

 const sortArray = (array) => {
    return array.sort((a,b) => {
        if (a.id < b.id) return -1
        if (a.id > b.id) return 1
        return 0
    })
}

const editChapter = (index, newChapter) => {
  chapters.splice(index, 1);
  const newChapters = sortArray([...chapters, newChapter]);
  setChapters(newChapters);
}

 const setMusics = (songs, index) => {
  const newChapter = {
   ...chapters[index],
   playlist: songs,
  };
  editChapter(index, newChapter)  
 };
 const setChallenges = (challenge, index) => {
  const newChapter = {
   ...chapters[index],
   challengers: challenge,
  };
  editChapter(index, newChapter)  
 };
 const setNPCs = (npc, index) => {
  const newChapter = {
   ...chapters[index],
   npcs: npc,
  };
  editChapter(index, newChapter)  
 };

 const setMonsters = (monster, index) => {
  const newChapter = {
   ...chapters[index],
   monsters: monster,
  };
  editChapter(index, newChapter)  
 };
 const setEquipments = (equipment, index) => {
   const newChapter = {
     ...chapters[index],
   magicItems: [...chapters[index].magicItems, equipment],
  };
  editChapter(index, newChapter)  
 };

 const setChapterDescription = (newDescription, index) => {
  const newChapter = {
   ...chapters[index],
   description: [...chapters[index].description,newDescription],
  };
  editChapter(index, newChapter)  
 };

 const DeleteChapter = (id) => {
    const newChapters = chapters.filter((chapter) => chapter.id !== id);
    setChapters(newChapters);
   };
  
    const deleteDescriptionText = (id, indexChapter) => {
      const newChapter = {
          ...chapters[indexChapter],
          description: [...chapters[indexChapter].description.filter(des => des.id !== id)],
         };
         editChapter(indexChapter, newChapter)   
   }
    const deleteMonster = (name, indexChapter) => {
      const newChapter = {
          ...chapters[indexChapter],
          monsters: [...chapters[indexChapter].monsters.filter(des => des.name !== name)],
         };
         editChapter(indexChapter, newChapter)   
   }
    const deleteEquipment = (name, indexChapter) => {
      const newChapter = {
          ...chapters[indexChapter],
          magicItems: [...chapters[indexChapter].magicItems.filter(des => des.name !== name)],
         };
         editChapter(indexChapter, newChapter)   
   }

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

  const editAllCampaigns = (url,newCampaignData ) => {
    const campaignEdited = campaignList.filter((camp) => camp.url !== url)
    const newCampaigns = [...campaignEdited, newCampaignData]
    dispatch(saveCampaign(newCampaigns))
 }

  const addSession = () => {
    const sessions = campaignSelected.sessions;
    if (sessionSelected.id === undefined) {
      const newSession = {
        id: sessions.length +1,
        title: title ,
        description: description,
        chapters: chapters,
       };
       const newCampaignData = {
         ...campaignSelected,
         sessions: [...sessions, newSession]
       }
       dispatch(selectCampaign(newCampaignData))
       editAllCampaigns(newCampaignData.url, newCampaignData)
       history.push(newCampaignData.url)
    } else {
      const newSession = {
        id: sessionId,
        title: title ,
        description: description,
        chapters: chapters,
       };
       const editArray = sessions.filter(sess => sess.id !== sessionId)
       const sortSessions = sortArray([...editArray, newSession])
       const newCampaignData = {
         ...campaignSelected,
         sessions: sortSessions
       }
       dispatch(selectCampaign(newCampaignData))
       editAllCampaigns(newCampaignData.url, newCampaignData)
       history.push(newCampaignData.url)
    }
  }


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
     <StyledIcon
        height="16" 
        icon={plusSquare}
        onClick={() => AddChapter()} />
    </h1>
    <Collapse accordion bordered={false}>
     {chapters.map(
      (
       { id, description, npcs, playlist, monsters, challengers, magicItems },
       indexChapter
      ) => (
       <Panel key={id} header={`capítulo ${id}`}>
        <PlayerItem>
         <PlayerInfo>
          <TitleInfo>
           <span>Descrição: </span>
           <Button
            backgroundColor="#373737" 
            textColor="white"
            onClick={() => setDescriptionModalOpen(true)}
            >
             Editar
            </Button>
          </TitleInfo>
          <AddDescriptionForm visible={addDescriptionModalOpen} onClose={() => setDescriptionModalOpen(false)} onSubmit={
              (description) => {
                setChapterDescription(description, indexChapter)
                setDescriptionModalOpen(false)
              } 
          }/>
          {
            description.map(({id, text, isSpeak}) => (
                <DescriptionInfo key={id} text={text} isSpeak={isSpeak} onDelete={() => deleteDescriptionText(id, indexChapter)}/>
            ))
          }
         </PlayerInfo>

         <PlayerInfo>
          <TitleInfo>
           <span>NPCs: </span>
           <Button
            backgroundColor="#373737" 
            textColor="white"
            onClick={() => {
             setNPCModalOpen(true);
            }}
           >
            Editar
           </Button>
           <AddNPCSessionForm
            visible={addNPCModalOpen}
            onClose={() => setNPCModalOpen(false)}
            onSubmit={(npc) => {
             setNPCs(npc, indexChapter);
             setNPCModalOpen(false);
            }}
            npcsDefault={npcs}
           />
          </TitleInfo>
          <div>
           {npcs.length > 0 ? (
            npcs.map(({ id, name }) => (
             <div key={id} style={{ margin: "1rem 0" }}>
              <TitleInfo>Nome:</TitleInfo>
              <span> {name}</span>
             </div>
            ))
           ) : (
            <div style={{ margin: "1rem 0" }}>
             <TitleInfo>Não há NPCs selecionados</TitleInfo>
            </div>
           )}
          </div>
         </PlayerInfo>

         <PlayerInfo>
          <TitleInfo>
           <span>Músicas: </span>
           <Button
            backgroundColor="#373737" 
            textColor="white" 
            onClick={() => setMusicModalOpen(true)}
            >
                Editar
           </Button>
           <AddMusicForm
            visible={addMusicModalOpen}
            onClose={() => setMusicModalOpen(false)}
            onSubmit={(songs) => {
             setMusics(songs, indexChapter);
             setMusicModalOpen(false);
            }}
            musicsDefault={playlist}
           />
          </TitleInfo>
          <div>
           {playlist.length > 0 ? (
            playlist.map(({ id, title, track_id, loop }) => (
             <MusicInfo title={title} trackId={track_id} loop={loop}/>
            ))
           ) : (
            <div style={{ margin: "1rem 0" }}>
             <TitleInfo>Não há músicas selecionadas</TitleInfo>
            </div>
           )}
          </div>
         </PlayerInfo>
         <PlayerInfo>
            <MonstersInfo 
                monsters={monsters}
                indexChapter={indexChapter}
                onEdit={() => setMonstersOpen(true)}
                onModalClose={() => setMonstersOpen(false)}
                isModalOpen={addMonstersOpen}
                onSubmitForm={(e) => {
                    const newMonsters = [...monsters, e];
                    setMonsters(newMonsters, indexChapter);
                    setMonstersOpen(false);
                }}
                onDelete={deleteMonster}
            />
         </PlayerInfo>
        </PlayerItem>

        <PlayerItem>
         <PlayerInfo>
        <AddChallengeForm 
            visible={addChallengeModalOpen}
            onClose={() => setChallengeModalOpen(false)}
            onSubmit={(challenge) => {
            setChallenges(challenge, indexChapter);
            setChallengeModalOpen(false);
            }}
            challengesDefault={challengers}

        />
          <TitleInfo>
           <span>Desafios: </span>
           <Button
            backgroundColor="#373737" 
            textColor="white" 
            onClick={() => setChallengeModalOpen(true)}>
            Editar
            </Button>
          </TitleInfo>
          <div>
           {challengers.length > 0 ? (
            challengers.map(({ id, title, dc, skill, secret }) => (
            <ChallengeInfo key={id} title={title} dc={dc} skill={skill} secret={secret}/>
            ))
           ) : (
            <div style={{ margin: "1rem 0" }}>
             <TitleInfo>Não há desafios selecionados</TitleInfo>
            </div>
           )}
          </div>
         </PlayerInfo>
        </PlayerItem>

        <PlayerItem>
         <PlayerInfo>
          <EquipmentInfo 
                equipments={magicItems}
                indexChapter={indexChapter}
                onEdit={() => setEquipModalOpen(true)}
                onModalClose={() => setEquipModalOpen(false)}
                isModalOpen={addEquipModalOpen}
                onSubmitForm={(equipment) => {
                  setEquipments(equipment, indexChapter);
                  setEquipModalOpen(false);
                  }}
                onDelete={deleteEquipment}
            />
         </PlayerInfo>
        </PlayerItem>
        <DeleteChapterDiv>
         <Button
            backgroundColor="#b21f66"
            textColor="white" 
            onClick={() => showDeleteConfirm(id)}>
          Deletar Capítulo
         </Button>
        </DeleteChapterDiv>
       </Panel>
      )
     )}
    </Collapse>
   </SessionSection>
   <DeleteChapterDiv>
    <Button 
    backgroundColor="#474747"
    textColor="white"
    onClick={() => history.push(campaignSelected.url)}
    >
        Cancelar
    </Button>
    <Button 
    backgroundColor="#b21f66"
    textColor="white"
    onClick={addSession}
    >
        Salvar Sessão
    </Button>
   </DeleteChapterDiv>
  </Card>
 );
};

export default CreateSession;
