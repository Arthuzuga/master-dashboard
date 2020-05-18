import React from 'react'
import styled from 'styled-components'
import { InputNumber } from "antd";


import { modifiers } from "../../helpers/functions";

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

const Monsters = ({monster, onQuantityChange}) => {
  return (
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
        onChange={onQuantityChange}
        min={1}
       />
      </MonsterSheetSession>
     </MonsterSheet>
  )
}

export default Monsters
