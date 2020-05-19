import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({isSpeak}) => isSpeak && "#e7e7e7"};
  border: ${({isSpeak}) => isSpeak && "2px solid #373737"};
  border-right: none;
  border-left: none;
  font-style: ${({isSpeak}) => isSpeak && "italic"};
`
// ADICIONAR BOTAO PARA APAGAR ELEMENTO DA LISTA DE TEXTOS

const DescriptionInfo = ({text, isSpeak}) => {
  return (
    <Message isSpeak={isSpeak}>
      <span>{text}</span>
    </Message>
  )
}

export default DescriptionInfo
