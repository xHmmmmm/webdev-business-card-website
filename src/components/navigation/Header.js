import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import Navbar from "components/navigation/Navbar"
import MobileNavigation from "components/navigation/MobileNavigation";
import Topbar from "components/navigation/Topbar"
import { useView } from 'contexts/ViewContext';

const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    font-size: 1.1em;

    @media (max-width: ${({ theme }) => theme.standardScreen}) 
    {
        font-size: 0.9em;
    }

    @media (max-width: ${({ theme }) => theme.narrowStandardScreen}) 
    {
        font-size: 0.8em;
    }
`

export default function Header()
{
    const { isMobile } = useView()

    return (
        <Wrapper>
            {isMobile || <Topbar />}
            {isMobile ? <MobileNavigation /> : <Navbar />}
        </Wrapper>
    )
}
