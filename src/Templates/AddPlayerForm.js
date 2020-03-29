import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Drawer, Button, Input, Select } from "antd";
import racetypes from "../mock/raceTypes";
import classestype from "../mock/classType";

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

const { Option } = Select;

const AddPlayerForm = ({ onSubmit, onClose, visible, onDelete }) => {
 const [avatar, setAvatar] = useState("");
 const [name, setName] = useState("");
 const [character, setCharacter] = useState("");
 const [raceType, setRaceType] = useState("Selecione uma Raça");
 const [classType, setClassType] = useState("Selecione uma Classe");
 const [level, setLevel] = useState("Selecione uma Classe");
 const [id, setId] = useState("");
 const [email, setEmail] = useState("");

 const onSumbitPlayer = () => {
  onSubmit({
   id,
   avatar,
   name,
   character,
   classType,
   raceType,
   level,
  });
 };

 useEffect(() => {
  setId((Math.random() * 100).toFixed(0));
 }, []);

 const handleRaceSelection = (raceSelected) => {
  setRaceType(raceSelected);
 };
 const handleClassSelection = (classSelected) => {
  setClassType(classSelected);
 };

 return (
  <Drawer
   title="Adicionar novo jogador"
   onClose={onClose}
   width={720}
   bodyStyle={{ paddingBottom: 80 }}
   visible={visible}
   footer={
    <Footer>
     <Button
      onClick={() => onDelete(id)}
      style={{ marginRight: 8 }}
      type="danger"
     >
      Apagar
     </Button>
     <Button onClick={onClose} style={{ marginRight: 8 }}>
      Cancelar
     </Button>
     <Button onClick={onSumbitPlayer} type="primary">
      Adicionar
     </Button>
    </Footer>
   }
  >
   <FormStyle>
    <Input
     addonBefore="URL do avatar"
     value={avatar}
     onChange={(e) => setAvatar(e.target.value)}
     style={{ width: "48%", marginBottom: "1rem" }}
    />
    <Input
     addonBefore="Nome do Jogador"
     value={name}
     onChange={(e) => setName(e.target.value)}
     style={{ width: "48%", marginBottom: "1rem" }}
    />
    <Input
     addonBefore="Nome do Personagem"
     value={character}
     onChange={(e) => setCharacter(e.target.value)}
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
    <Select
     defaultValue={raceType}
     onChange={handleRaceSelection}
     style={{ width: "48%", marginBottom: "1rem" }}
    >
     {racetypes.map((race, index) => (
      <Option key={index} value={race}>
       {race}
      </Option>
     ))}
    </Select>
    <Select
     defaultValue={classType}
     onChange={handleClassSelection}
     style={{ width: "48%", marginBottom: "1rem" }}
    >
     {classestype.map((classType, index) => (
      <Option key={index} value={classType}>
       {classType}
      </Option>
     ))}
    </Select>
    <Input
     addonBefore="E-mail do Jogador"
     value={email}
     onChange={(e) => {
      setEmail(e.target.value);
     }}
     style={{ width: "48%", marginBottom: "1rem" }}
    />
   </FormStyle>
  </Drawer>
 );
};

export default AddPlayerForm;
