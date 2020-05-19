import React from 'react'
import styled from 'styled-components'
import { TitleInfo } from '../../Component'

const Wrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const AudioDiv = styled.div`
  margin-left: 1rem;
`


const Music = ({title, trackId, loop}) => {

  return (
    <Wrapper>
      <div>   
          <TitleInfo>Título:</TitleInfo>
          <span> {title}</span>
      </div>
      <AudioDiv> 
        <audio controls>
          <source
          src={trackId}
          type="audio/mpeg"
          loop={loop}
          title={title}
          />
      </audio>
      </AudioDiv>
  </Wrapper>
  )
}

export default Music
