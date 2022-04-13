import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';


const Navigation = styled.nav`
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
    color: ${({ isCurrent, theme }) => isCurrent && theme.colors.accent};

    :hover
    {
        color: ${({ theme }) => theme.colors.accent};
    }
`

export default function Navbar({ currentId })
{
    function scrollToSection(id)
    {
        const element = document.getElementById(id)
        element.scrollIntoView()
    }

    return (
        <Navigation>
            <Button isCurrent={currentId === 'start'} onClick={() => scrollToSection('start')}>START</Button>
            <Button isCurrent={currentId === 'offers'} onClick={() => scrollToSection('offers')}>OFERTA</Button>
            <Button isCurrent={currentId === 'steps'} onClick={() => scrollToSection('steps')}>JAK ZAMÓWIĆ?</Button>
            <Button isCurrent={currentId === 'contact'} onClick={() => scrollToSection('contact')}>KONTAKT</Button>
        </Navigation>
    )
}
