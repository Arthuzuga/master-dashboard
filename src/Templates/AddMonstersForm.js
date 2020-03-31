import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Drawer, Button, Empty, Spin, InputNumber } from "antd";
import { getMonsterInfo } from "../services/getMonsters";
import { modifiers } from "../helpers/functions";

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

const MonsterSheet = styled.div`
 background-color: #fffebd;
 border-top: 4px solid #f7ce65;
 border-bottom: 4px solid #f7ce65;
 margin: 2rem 0;
 padding: 1rem;
 width: 60%;
 display: flex;
 justify-content: space-between;
 flex-direction: column;
`;

const MonsterName = styled.h1`
 font-family: "Roboto", Helvetica, sans-serif;
 color: #290000;
 margin-bottom: 1px;
`;
const MonsterActions = styled.h2`
 font-family: "Roboto", Helvetica, sans-serif;
 color: #290000;
 margin-bottom: 1px;
 border-bottom: 1px solid #930c10;
`;
const MonsterSheetSession = styled.div`
 width: 100%;
 border-bottom: 2px solid #930c10;
 padding-bottom: 0.5rem;
 color: #290000;
 display: flex;
 flex-direction: column;
`;

const MonsterStats = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;
const MonsterStatsRow = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`;

const AddMonstersForm = ({
 onSubmit,
 onClose,
 visible = true,
 monsterList,
}) => {
 const [monsterSelected, setMonsterSelected] = useState("");
 const [monster, setMonster] = useState("");
 const [monsters, setMonsters] = useState([]);
 const [step, setStep] = useState(0);

 useEffect(() => {
  setMonsters(monsterList);
 }, [monsterList]);

 const onSumbitMonster = () => {
  //   console.log(monsterSelected);
  onSubmit(monsterSelected);
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
     <MonsterSheet>
      <MonsterSheetSession>
       <MonsterName>{monster.name}</MonsterName>
       <span>
        {monster.size + " " + monster.type + ", " + monster.alignment}
       </span>
      </MonsterSheetSession>
      <MonsterSheetSession>
       <span>
        <strong>Armor Class:</strong> {monster.armor_class}
       </span>
       <span>
        <strong>Hit Points:</strong>{" "}
        {monster.hit_points + `(${monster.hit_dice})`}
       </span>
       <span>
        <strong>Speed:</strong> {Object.values(monster.speed)[0]}
       </span>
      </MonsterSheetSession>
      <MonsterSheetSession>
       <MonsterStatsRow>
        <MonsterStats>
         <span>
          <strong>STR</strong>
         </span>
         <span>{modifiers(monster.strength)}</span>
        </MonsterStats>
        <MonsterStats>
         <span>
          <strong>DEX</strong>
         </span>
         <span>{modifiers(monster.dexterity)}</span>
        </MonsterStats>
        <MonsterStats>
         <span>
          <strong>CON</strong>
         </span>
         <span>{modifiers(monster.constitution)}</span>
        </MonsterStats>
        <MonsterStats>
         <span>
          <strong>INT</strong>
         </span>
         <span>{modifiers(monster.intelligence)}</span>
        </MonsterStats>
        <MonsterStats>
         <span>
          <strong>WIS</strong>
         </span>
         <span>{modifiers(monster.wisdom)}</span>
        </MonsterStats>
        <MonsterStats>
         <span>
          <strong>CHA</strong>
         </span>
         <span>{modifiers(monster.charisma)}</span>
        </MonsterStats>
       </MonsterStatsRow>
      </MonsterSheetSession>
      <MonsterSheetSession>
       {monster.damage_vulnerabilities.length > 0 && (
        <span>
         <strong>Damage Vulnerabilities:</strong>{" "}
         {monster.damage_vulnerabilities.map((value) => `${value} `)}
        </span>
       )}
       {monster.damage_resistances.length > 0 && (
        <span>
         <strong>Damage Resistances:</strong>{" "}
         {monster.damage_resistances.map((value) => `${value} `)}
        </span>
       )}
       {monster.damage_immunities.length > 0 && (
        <span>
         <strong>Damage Immunities:</strong>{" "}
         {monster.damage_immunities.map((value) => `${value} `)}
        </span>
       )}
       {monster.condition_immunities.length > 0 && (
        <span>
         <strong>Condition Immunities:</strong>{" "}
         {monster.condition_immunities.map(({ name }) => `${name} `)}
        </span>
       )}
       <span>
        <strong>Senses:</strong>{" "}
        {`darkvision ${monster.senses.darkvision || ""}, passive Perception ${
         monster.senses.passive_perception
        }`}
       </span>
       <span>
        <strong>Languages:</strong> {monster.languages}
       </span>
       <span>
        <strong>Challenge:</strong> {monster.challenge_rating}
       </span>
      </MonsterSheetSession>
      <MonsterSheetSession>
       {monster.special_abilities !== undefined && (
        <div
         style={{ margin: "4px 0", display: "flex", flexDirection: "column" }}
        >
         {monster.special_abilities.map(({ name, desc }) => (
          <span key={name} style={{ margin: "4px 0" }}>
           <strong>{name}</strong> {desc}
          </span>
         ))}
        </div>
       )}
       <MonsterActions>Actions</MonsterActions>
       {monster.actions.map(({ name, desc }) => (
        <span key={name} style={{ margin: "4px 0" }}>
         <strong>{name}</strong> {desc}
        </span>
       ))}
      </MonsterSheetSession>
      <MonsterSheetSession>
       <h3>Quantidade</h3>
       <InputNumber
        onChange={(e) => {
         setMonsterSelected({
          ...monsterSelected,
          quantity: e,
         });
        }}
        min={1}
       />
      </MonsterSheetSession>
     </MonsterSheet>
    ) : (
     <div style={{ width: "100%" }}>
      <Empty />
     </div>
    )}
   </FormStyle>
  </Drawer>
 );
};

const mapStateToProps = (state) => ({
 monsterList: state.monsters,
});

export default connect(mapStateToProps)(AddMonstersForm);
