import React, { useState } from "react";
import styled from "styled-components";
import { Drawer, Button, Empty, Input, Select, Checkbox } from "antd";
import { Icon } from '@iconify/react';
import plusSquare from '@iconify/icons-fa-regular/plus-square';

import { skillList, playersList } from "../../mock"
import { TitleInfo } from "../../Component"

const { Option } = Select;

const Footer = styled.div`
 text-align: right;
`;

const FormStyle = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-between;
 align-items: center;
`;

const ChallengeDiv = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 margin: 1rem 0;
`;

const FormDiv = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 1rem 0;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  flex-direction: column;
` 

const AddChallengeForm = ({ onSubmit, onClose, visible, challengesDefault = [] }) => {
 const [challenges, setChallenges] = useState(challengesDefault);
 const [selectedSkill, setSkillSelected] = useState("Selecione uma habilidade");
 const [name, setName] = useState("");
 const [level, setLevel] = useState(0);
 const [secret, setSecret] = useState(false);
 const [players, setPlayers] = useState([]);

 const onSumbitChallengeList = () => {
  onSubmit(challenges);
 };

  const addChallenge = (challenge) => {
    const newChallenge = {
      ...challenge,
      id: challenges.length +1,
    }
    const newChallenges = [...challenges, newChallenge]
    setChallenges(newChallenges)
  }

 const deleteChallenge = (id) => {
  const filteredChallenges = challenges.filter((cha) => cha.id !== id);
  setChallenges(filteredChallenges);
 };

 const handleSkillSelection = (categorySelected) => {
  setSkillSelected(categorySelected);
 };
 const handlePlayersSelection = (playersSelected) => {
  console.log(playersSelected);
  setPlayers(playersSelected)
 };

 return (
  <Drawer
   title="Adicionar nova Lista de Desafios"
   onClose={onClose}
   width={720}
   bodyStyle={{ paddingBottom: 80 }}
   visible={visible}
   footer={
    <Footer>
     <Button onClick={onClose} style={{ marginRight: 8 }}>
      Cancelar
     </Button>
     <Button onClick={onSumbitChallengeList} type="primary">
      Adicionar
     </Button>
    </Footer>
   }
  >
   <FormStyle>
    {challenges.length > 0 ? (
     challenges.map(({ id, title }, index) => (
      <ChallengeDiv>
       <span key={index}>{title}</span>
       <Button onClick={() => deleteChallenge(id)} type="danger">
        Apagar
       </Button>
      </ChallengeDiv>
     ))
    ) : (
     <Empty />
    )}
    <FormDiv>
      <TitleInfo><h2>Novo Desafio</h2></TitleInfo>
      <Input
      addonBefore="Titulo do Desafio"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={{ width: "48%", marginBottom: "1rem" }}
      />
      <Input
      addonBefore="Nível do Personagem"
      value={level}
      onChange={(e) => {
        setLevel(e.target.value);
      }}
      type="number"
      style={{ width: "48%", marginBottom: "1rem" }}
      />
      <Select defaultValue={selectedSkill} onChange={handleSkillSelection}>
      {skillList.map((skillName, index) => (
        <Option key={index} value={skillName}>
        {skillName}
        </Option>
      ))}
      </Select>
      <div 
        style={{
          width: "30%",
          margin: '1rem 0', 
          display: "flex", 
          flexDirection:"row", 
          justifyContent: "flex-start"
          }}
      > 
        <TitleInfo>O Desafio será secreto? </TitleInfo>
        <Checkbox checked={secret} onChange={() => { const value = !secret; setSecret(value)}}/>
      </div>
      <Select 
        mode="multiple" 
        placeholder="Selecioner os personagens para o desafio" 
        defaultValue={players} 
        onChange={handlePlayersSelection}
      >
      {playersList.map(({character}, index) => (
        <Option key={index} value={character}>
        {character}
        </Option>
      ))}
      </Select>
      <div 
        style={{
          width: "100%", 
          display: "flex", 
          flexDirection: "row",
          justifyContent: "flex-end", 
          marginTop: "2rem"
          }}
        > 
        <Icon icon={plusSquare} height={40} onClick={() => {
          addChallenge({
            title: name,
            skill: selectedSkill,
            dc: level,
            secret: secret,
            players: players
          })
        }}/>
      </div>
    </FormDiv>

   </FormStyle>
  </Drawer>
 );
};

export default AddChallengeForm;
