import React from 'react'
import { TitleInfo, Button } from '../../Component'

const DescriptionInfo = ({monsters, indexChapter, onEdit, onModalClose, isModalOpen, onSubmitForm}) => {
  return (
    <>
      <TitleInfo>
        <span>Descrição: </span>
        <Button 
          backgroundColor="#373737" 
          textColor="white"
          onClick={onEdit}
        >
           Editar
        </Button>
      </TitleInfo>
      <div>
        {monsters.length > 0 ? (
          monsters.map(({ index, name, quantity }) => (
            <div key={index} style={{ margin: "1rem 0" }}>
            <TitleInfo>Nome:</TitleInfo>
            <span> {name}</span>
            <span> x{quantity}</span>
            </div>
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

export default DescriptionInfo
