import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Drawer, Button, Empty, Spin } from "antd";
import MonsterSheet from "../Sheets/Monsters"
import { getMonsterInfo } from "../../services/getMonsters";

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

const MonsterListItem = styled.span`
 width: 30%;
 background-color: gainsboro;
 border-radius: 8px;
 padding: 1rem;
 text-align: center;
 margin: 0.5rem 0;
 cursor: pointer;
`;

const AddMonstersForm = ({
 onSubmit,
 onClose,
 visible = true,
}) => {
  const monsterList = useSelector(state => state.monsters)

 const [monsterSelected, setMonsterSelected] = useState("");
 const [monster, setMonster] = useState("");
 const [monsters, setMonsters] = useState([]);
 const [step, setStep] = useState(0);

 useEffect(() => {
  setMonsters(monsterList);
 }, [monsterList]);

 const onSumbitMonster = () => {
  onSubmit(monsterSelected);
  setMonster("");
 };

 const getMonsterData = async (monster) => {
  const { index, name, url } = monster;
  const res = await getMonsterInfo(url);
  setMonster(res);
  setMonsterSelected({
   index,
   name,
   url,
   quantity: 1,
  });
 };

 return (
  <Drawer
   title="Adicionar monstros"
   onClose={onClose}
   width={720}
   bodyStyle={{ paddingBottom: 80 }}
   visible={visible}
   footer={
    <Footer>
     <Button onClick={onClose} style={{ marginRight: 8 }}>
      Cancelar
     </Button>
     <Button
      onClick={onSumbitMonster}
      type="primary"
      disabled={monsterSelected.index !== undefined ? false : true}
     >
      Adicionar
     </Button>
    </Footer>
   }
  >
   <FormStyle>
    {monsters.length === 0 ? (
     <Spin />
    ) : (
     monsters.slice(15 * step, 15 * (step + 1)).map((monster) => (
      <MonsterListItem
       key={monster.index}
       onClick={() => getMonsterData(monster)}
      >
       {monster.name}
      </MonsterListItem>
     ))
    )}
    <div
     style={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
     }}
    >
     <Button
      onClick={() => {
       if (step > 0) {
        const value = step - 1;
        setStep(value);
       }
      }}
     >
      menos
     </Button>
     <span>{step + 1}</span>
     <Button
      onClick={() => {
       if (step < 21) {
        const value = step + 1;
        setStep(value);
       }
      }}
     >
      mais
     </Button>
    </div>

    {monster !== "" ? (
      <MonsterSheet
        monster={monster}
        onQuantityChange={(e) => {
         setMonsterSelected({
          ...monsterSelected,
          quantity: e,
         });
        }}
        min={1}
       />
    ) : (
     <div style={{ width: "100%" }}>
      <Empty />
     </div>
    )}
   </FormStyle>
  </Drawer>
 );
};


export default AddMonstersForm;
