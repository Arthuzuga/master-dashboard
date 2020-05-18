import React, { useState } from "react";
import styled from "styled-components";
import { Drawer, Button, Empty, Select } from "antd";
import npcsMocks from "../../mock/npcs";

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

const MusicFile = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 margin: 1rem 0;
`;

const AddNPCSessionForm = ({
 onSubmit,
 onClose,
 visible,
 npcsDefault = [],
}) => {
 const [npcs, setNPCs] = useState(npcsDefault);
 const [npcType, setNPCType] = useState("Selecione o NPC ");

 const addNPC = (id) => {
  setNPCType(id);
  const selectedNPC = npcsMocks.filter((n) => n.id === id);
  const newNPCs = [...npcs, ...selectedNPC];
  setNPCs(newNPCs);
 };

 const onSumbitNPC = () => {
  onSubmit(npcs);
 };

 const deleteNPC = (id) => {
  const filteredNPCs = npcs.filter((npc) => npc.id !== id);
  setNPCs(filteredNPCs);
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
    {npcs.length > 0 ? (
     npcs.map(({ id, name }, index) => (
      <MusicFile>
       <span key={index}>{name}</span>
       <Button onClick={() => deleteNPC(id)} type="danger">
        Apagar
       </Button>
      </MusicFile>
     ))
    ) : (
     <Empty />
    )}
    <Select
     defaultValue={npcType}
     onChange={addNPC}
     style={{ width: "48%", marginBottom: "1rem" }}
    >
     {npcsMocks.map(({ id, name }, index) => (
      <Option key={index} value={id}>
       {name}
      </Option>
     ))}
    </Select>
   </FormStyle>
  </Drawer>
 );
};

export default AddNPCSessionForm;
