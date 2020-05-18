import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: 1px solid #767676;
    border-radius: 8px;
    background-color: ${({backgroundColor}) => backgroundColor && backgroundColor};
    color:  ${({textColor}) => textColor && textColor};
    font-weight: 400;
    cursor:  ${({disable}) => disable ? "not-allowed" : "pointer"};
    margin: 2px;
    outline: none;
`

const Button = ({backgroundColor, textColor, children, onClick, disable}) => {
    return (
        <StyledButton 
            onClick={!disable && onClick} 
            disable={disable} 
            backgroundColor={backgroundColor} 
            textColor={textColor}
        >
            {children}
        </StyledButton>
    )
}

export default Button
