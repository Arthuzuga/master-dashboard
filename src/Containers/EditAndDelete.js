import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import trashAlt from '@iconify/icons-fa-regular/trash-alt';
import editIcon from '@iconify/icons-fa-regular/edit';

const StyledIcon = styled(Icon)`
  margin: 0 1rem;
  cursor: pointer;
`

const EditAndDelete = ({onEdit, onDelete}) => {
  return (
    <div>
      <StyledIcon 
        icon={editIcon} 
        onClick={onEdit}
        />
      <StyledIcon 
        icon={trashAlt}
        onClick={onDelete}
      />
    </div>
  )
}

export default EditAndDelete
