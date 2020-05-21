import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import trashAlt from '@iconify/icons-fa-regular/trash-alt';

const Message = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({isSpeak}) => isSpeak && "#e7e7e7"};
  border: ${({isSpeak}) => isSpeak && "2px solid #373737"};
  border-right: none;
  border-left: none;
  font-style: ${({isSpeak}) => isSpeak && "italic"};
  span{
    width: 80%;
  }
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const DescriptionInfo = ({text, isSpeak, onDelete}) => {
  return (
    <Message isSpeak={isSpeak}>
      <span>{text}</span>
      <StyledIcon 
        icon={trashAlt}
        onClick={onDelete}
      />
    </Message>
  )
}

export default DescriptionInfo
