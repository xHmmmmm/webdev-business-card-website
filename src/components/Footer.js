import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"

const StyledFooter = styled.footer`
    height: 300px;
    background-color: ${({ theme }) => theme.colors.accent};
`

export default function Footer()
{
    return (
        <StyledFooter>
            © Copyright {new Date().getFullYear()}
        </StyledFooter>
    )
}
