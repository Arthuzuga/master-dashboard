import React from 'react'
import styled from 'styled-components'

const PlayerInfoTitle = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 font-weight: bold;
`;

const TitleInfo = ({children}) => {
  return (
    <PlayerInfoTitle>
      {children}
    </PlayerInfoTitle>
  )
}

export default TitleInfo
