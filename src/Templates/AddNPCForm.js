import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Drawer, Button, Input, Select } from "antd";
import racetypes from "../mock/raceTypes";
import alignments from "../mock/alignmentsList";

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

const AddNPCForm = ({ onSubmit, onClose, visible, onDelete }) => {
 const [name, setName] = useState("");
 const [age, setAge] = useState("");
 const [ideal, setIdeal] = useState("");
 const [bond, setBond] = useState("");
 const [flaw, setFlaw] = useState("");
 const [background, setBackground] = useState("");
 const [affiliation, setAffiliation] = useState("");
 const [raceType, setRaceType] = useState("Selecione uma Raça");
 const [alignment, setAlignment] = useState("Selecione uma Alinhamento");
 const [id, setId] = useState("");

 const onSumbitNPC = () => {
  onSubmit({
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
   items: [],
  });
 };

 useEffect(() => {
  setId((Math.random() * 100).toFixed(0));
 }, []);

 const handleRaceSelection = (raceSelected) => {
  setRaceType(raceSelected);
 };
 const handleAlignmentSelection = (alignmentSelected) => {
  setAlignment(alignmentSelected);
 };

 return (
  <Drawer
   title="Adicionar novo NPC"
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
     <Button onClick={onSumbitNPC} type="primary">
      Adicionar
     </Button>
    </Footer>
   }
  >
   <FormStyle>
    <Input
     addonBefore="Nome do Personagem"
     value={name}
     onChange={(e) => setName(e.target.value)}
     style={{ width: "48%", marginBottom: "1rem" }}
    />
    <Input
     addonBefore="Idade do Personagem"
     value={age}
     onChange={(e) => setAge(e.target.value)}
     style={{ width: "48%", marginBottom: "1rem" }}
     type="number"
    />
    <Input
     addonBefore="Ideais do Personagem"
     value={ideal}
     onChange={(e) => setIdeal(e.target.value)}
     style={{ width: "48%", marginBottom: "1rem" }}
    />
    <Input
     addonBefore="Laços do Personagem"
     value={bond}
     onChange={(e) => setBond(e.target.value)}
     style={{ width: "48%", marginBottom: "1rem" }}
    />
    <Input
     addonBefore="Falhas do Personagem"
     value={flaw}
     onChange={(e) => setFlaw(e.target.value)}
     style={{ width: "48%", marginBottom: "1rem" }}
    />
    <Input
     addonBefore="História do Personagem"
     value={background}
     onChange={(e) => setBackground(e.target.value)}
     style={{ width: "48%", marginBottom: "1rem" }}
    />
    <Input
     addonBefore="Filiação do Personagem"
     value={affiliation}
     onChange={(e) => setAffiliation(e.target.value)}
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
     defaultValue={alignment}
     onChange={handleAlignmentSelection}
     style={{ width: "48%", marginBottom: "1rem" }}
    >
     {alignments.map((alignmentType, index) => (
      <Option key={index} value={alignmentType}>
       {alignmentType}
      </Option>
     ))}
    </Select>
   </FormStyle>
  </Drawer>
 );
};

export default AddNPCForm;
