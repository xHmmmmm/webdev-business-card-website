import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"

const StartSection = styled.section`
    grid-area: content;
    height: calc(100vh - 110px);
    background-color: ${({ theme }) => theme.colors.liteGrayBg};
`

export default function StartPage()
{
    return (
        <StartSection>

        </StartSection>
    )
}
