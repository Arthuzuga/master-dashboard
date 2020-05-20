import React from 'react'
import AddMonstersForm from '../Forms/AddMonstersForm'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import trashAlt from '@iconify/icons-fa-regular/trash-alt';
import { TitleInfo, Button } from '../../Component'

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const MonsterItemRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const MonstersInfo = ({monsters, indexChapter, onEdit, onModalClose, isModalOpen, onSubmitForm, onDelete}) => {
  return (
    <>
      <TitleInfo>
        <span>Monstros: </span>
        <Button 
          backgroundColor="#373737" 
          textColor="white"
          onClick={onEdit}
        >
           Editar
        </Button>
        <AddMonstersForm
          visible={isModalOpen}
          onClose={onModalClose}
          onSubmit={onSubmitForm}
        />
      </TitleInfo>
      <div>
        {monsters.length > 0 ? (
          monsters.map(({ index, name, quantity }) => (
            <MonsterItemRow key={index}>
              <div style={{ margin: "1rem" }}>
                <TitleInfo>Nome:</TitleInfo>
                <span> {name}</span>
                <span> x{quantity}</span>
              </div>
              <StyledIcon 
                icon={trashAlt}
                onClick={() => onDelete(name, indexChapter)}
              />
            </MonsterItemRow>
          ))
        ) : (
        <div style={{ margin: "1rem 0" }}>
          <TitleInfo>Não há monstros selecionados</TitleInfo>
        </div>
        )}
      </div>
    </>
  )
}

export default MonstersInfo
