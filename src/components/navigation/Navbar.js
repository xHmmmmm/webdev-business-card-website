import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';


const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.whiteBg};
    position: sticky;
`

const Button = styled.button`
    font-size: 1.1em;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.whiteBg};
    transition: color 0.2s ease-in-out;

    :hover
    {
        color: ${({ theme }) => theme.colors.accent};
    }
`

export default function Navbar()
{
    return (
        <Navigation>
            <Button>START</Button>
            <Button>OFERTA</Button>
            <Button>JAK ZAMÓWIĆ?</Button>
            <Button>KONTAKT</Button>
        </Navigation>
    )
}
