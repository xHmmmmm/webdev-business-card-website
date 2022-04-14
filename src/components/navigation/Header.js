import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import Navbar from "components/navigation/Navbar"
import Topbar from "components/navigation/Topbar"

const Wrapper = styled.header`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 2em 3.8em;
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

export default function Header({ currentId })
{
    return (
        <Wrapper>
            <Topbar />
            <Navbar currentId={currentId} />
        </Wrapper>
    )
}
