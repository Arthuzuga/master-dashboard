import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Drawer, Button, Empty, Spin } from "antd";
import { getEquipmentList, getEquipmentData } from "../../services/getEquipments";
import { TitleInfo } from '../../Component'

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

const ListItem = styled.span`
 width: 30%;
 background-color: gainsboro;
 border-radius: 8px;
 padding: 1rem;
 text-align: center;
 margin: 0.5rem 0;
 cursor: pointer;
`;

const AddEquipForm = ({
 onSubmit,
 onClose,
 visible = true,
}) => {

  const equipCategories = useSelector(state => state.equipments)

 const [equipListSelected, setEquipListSelected] = useState([]);
 const [equipSelected, setEquipSelected] = useState("");
 const [categoryStep, setCategoryStep] = useState(0);
 const [equipStep, setEquipStep] = useState(0);



 const onSumbitEquipment = () => {
  onSubmit(equipSelected);
 };

 const getEquipmentListData = async (category) => {
  const { url } = category;
  const res = await getEquipmentList(url);
  const { equipment } = res
  setEquipListSelected(equipment)
 };
 const getEquipmentItem = async (element) => {
   const { url } = element;
  const res = await getEquipmentData(url);
  console.log(res)
  setEquipSelected(res)
 };

 return (
  <Drawer
   title="Adicionar Equipamentos"
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
      onClick={onSumbitEquipment}
      type="primary"
      disabled={equipSelected.index !== undefined ? false : true}
     >
      Adicionar
     </Button>
    </Footer>
   }
  >
   <FormStyle>
    <h1>Selecione uma categoria de equipamento</h1>

    {equipCategories.length === 0 ? (
     <Spin />
    ) : (
      equipCategories.slice(9 * categoryStep, 9 * (categoryStep + 1)).map((category) => (
      <ListItem
       key={category.index}
       onClick={() => getEquipmentListData(category)}
      >
       {category.name}
      </ListItem>
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
       if (categoryStep > 0) {
        const value = categoryStep - 1;
        setCategoryStep(value);
       }
      }}
     >
      menos
     </Button>
     <span>{categoryStep + 1}</span>
     <Button
      onClick={() => {
       if (categoryStep <= 4) {
        const value = categoryStep + 1;
        setCategoryStep(value);
       }
      }}
     >
      mais
     </Button>
    </div>

    <h1>Selecione um equipamento</h1>
    <div 
      style={{
        margin: "2rem 0",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }}>
      {
      equipListSelected.length === 0 ? (
      <Empty />
      ) : (
        equipListSelected.slice(9 * equipStep, 9 * (equipStep + 1)).map((equip) => (
        <ListItem
        key={equip.index}
        onClick={() => getEquipmentItem(equip)}
        >
        {equip.name}
        </ListItem>
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
        if (equipStep > 0) {
          const value = equipStep - 1;
          setEquipStep(value);
        }
        }}
      >
        menos
      </Button>
      <span>{equipStep + 1}</span>
      <Button
        onClick={() => {
        if (equipStep < 11) {
          const value = equipStep + 1;
          setEquipStep(value);
        }
        }}
      >
        mais
      </Button>
      </div>
    </div>

    {equipSelected !== "" ? (
      <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start"}}>
        <div style={{ margin: "1rem" }}>
          <TitleInfo>Nome:</TitleInfo>
          <span> {equipSelected.name}</span>
        </div>
        <div style={{ margin: "1rem" }}>
          <TitleInfo>Preço:</TitleInfo>
          <span> {equipSelected.cost.quantity}</span>
          <span> {equipSelected.cost.unit}</span>
        </div>
      </div>
    ) : (
     <div style={{ width: "100%" }}>
      <Empty />
     </div>
    )}
   </FormStyle>
  </Drawer>
 );
};


export default AddEquipForm;
