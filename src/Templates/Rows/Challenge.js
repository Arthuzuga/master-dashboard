import React from 'react'
import styled from 'styled-components'
import { Checkbox } from 'antd'
import { TitleInfo } from '../../Component'

const Wrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-wrapper {
    cursor: not-allowed;
  }
  .ant-checkbox-wrapper-checked{
    cursor: not-allowed;
  }
  .ant-checkbox-input {
  cursor: not-allowed;
  }
  .ant-checkbox-checked {
    cursor: not-allowed;
  }
`


const ChallengeInfo = ({title, dc, skill, secret}) => {
  return (
    <Wrapper>
      <div>   
          <TitleInfo>Título:</TitleInfo>
          <span> {title}</span>
      </div>
      <div> 
          <TitleInfo>Habilidade:</TitleInfo>
          <span> {skill}</span>
      </div>
      <div> 
          <TitleInfo>Dificuldade:</TitleInfo>
          <span> {dc}</span>
      </div>
      <div> 
          <TitleInfo>Secreto:</TitleInfo>
          <StyledCheckbox checked={secret} />
      </div>
  </Wrapper>
  )
}

export default ChallengeInfo
