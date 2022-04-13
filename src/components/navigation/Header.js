import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import Navbar from "components/navigation/Navbar"
import Topbar from "components/navigation/Topbar"

const Wrapper = styled.header`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 40px 70px;
`

export default function Header()
{
    return (
        <Wrapper>
            <Topbar />
            <Navbar />
        </Wrapper>
    )
}
