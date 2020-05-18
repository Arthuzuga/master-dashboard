import React from 'react'
import { Button } from '../Component'

const EditAndDelete = ({onEdit, onDelete}) => {
  return (
    <div>
      <Button 
        backgroundColor="#373737" 
        textColor="white" 
        onClick={onEdit}
        >
          Editar
        </Button>
      <Button 
        backgroundColor="#b21f66" 
        textColor="white" 
        onClick={onDelete}
        >
          Apagar
        </Button>
    </div>
  )
}

export default EditAndDelete
