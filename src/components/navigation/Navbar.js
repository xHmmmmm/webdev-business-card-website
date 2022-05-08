import React, { useState, useEffect, useReducer, useLayoutEffect } from 'react'
import styled from 'styled-components';
import { scrollTo } from "../../utils";


const Navigation = styled.nav`
    min-height: 3.8em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.whiteBg};
    position: sticky;
    user-select: none;
    box-shadow: 0px 0px 29px 10px rgba(0, 0, 0, 0.05);
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

            <Button onClick={() => scrollTo('start')}>START</Button>
            <Button onClick={() => scrollTo('offer')}>OFERTA</Button>
            <Button onClick={() => scrollTo('steps')}>JAK ZAMÓWIĆ?</Button>
            <Button onClick={() => scrollTo('contact')}>KONTAKT</Button>
        </Navigation>
    )
}
