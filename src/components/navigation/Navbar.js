import React, { useState, useEffect, useReducer, useLayoutEffect } from 'react'
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

let isScrolling = false

export default function Navbar({ currentId })
{
    const [currentIdSelection, setCurrentIdSelection] = useState('start')

    useLayoutEffect(() =>
    {
        console.log(currentId)
        console.log(currentIdSelection)
        if (currentId !== currentIdSelection && !isScrolling) 
        {
            setCurrentIdSelection(currentId)
        }
        isScrolling = false
    }, [currentId])

    function scrollToSection(id)
    {
        isScrolling = true;
        setCurrentIdSelection(id)
        const element = document.getElementById(id)
        element.scrollIntoView()
    }

    return (
        <Navigation>
            <Button isCurrent={currentIdSelection === 'start'} onClick={() => scrollToSection('start')}>START</Button>
            <Button isCurrent={currentIdSelection === 'offers'} onClick={() => scrollToSection('offers')}>OFERTA</Button>
            <Button isCurrent={currentIdSelection === 'steps'} onClick={() => scrollToSection('steps')}>JAK ZAMÓWIĆ?</Button>
            <Button isCurrent={currentIdSelection === 'contact'} onClick={() => scrollToSection('contact')}>KONTAKT</Button>
        </Navigation>
    )
}
