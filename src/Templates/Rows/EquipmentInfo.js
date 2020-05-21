import React from 'react'
import AddEquipForm from '../Forms/AddEquipForm'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import trashAlt from '@iconify/icons-fa-regular/trash-alt';
import { TitleInfo, Button } from '../../Component'

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const EquipItemRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const EquipmentInfo = ({equipments, indexChapter, onEdit, onModalClose, isModalOpen, onSubmitForm, onDelete}) => {
  return (
    <>
      <TitleInfo>
        <span>Equipamentos: </span>
        <Button 
          backgroundColor="#373737" 
          textColor="white"
          onClick={onEdit}
        >
           Editar
        </Button>
         <AddEquipForm
             visible={isModalOpen}
             onClose={onModalClose}
             onSubmit={onSubmitForm}
          />
      </TitleInfo>
      <div>
        {equipments.length > 0 ? (
          equipments.map(({ index, name, cost:{quantity, unit}, equipment_category }) => (
            <EquipItemRow key={index}>
              <div style={{ margin: "1rem" }}>
                <TitleInfo>Nome:</TitleInfo>
                <span> {name}</span>
              </div>
              <div style={{ margin: "1rem" }}>
                <TitleInfo>Categoria:</TitleInfo>
                <span> {equipment_category}</span>
              </div>
              <div style={{ margin: "1rem" }}>
                <TitleInfo>Preço:</TitleInfo>
                <span> {quantity}</span>
                <span> {unit}</span>
              </div>
              <StyledIcon 
                icon={trashAlt}
                onClick={() => onDelete(name, indexChapter)}
              />
            </EquipItemRow>
          ))
        ) : (
        <div style={{ margin: "1rem 0" }}>
          <TitleInfo>Não há equipamentos selecionados</TitleInfo>
        </div>
        )}
      </div>
    </>
  )
}

export default EquipmentInfo
