import React, { useState, useEffect, useReducer, useLayoutEffect } from 'react'
import styled from 'styled-components';
import { scrollTo } from "../../utils";
import { RiMenuFill, RiCloseFill } from 'react-icons/ri'
import { AnimatePresence, motion } from 'framer-motion';

const Navigation = styled.nav`
    pointer-events: none;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 1.5rem;
    gap: 1.5rem;
`

const ExpandButton = styled.button`
    display: flex;
    padding: 1.2rem;
    border-radius: 50%;
    font-size: 1.8rem;
    background-color: ${({ theme, isExpanded }) => isExpanded ? theme.colors.accentHover : theme.colors.accent};
    pointer-events: initial;
    transition: all 0.2s ease-in-out, background-color 0.3s ease-in-out;
    transition-property: height, width, background-color;
    transition: background-color 0.2s linear;

    ::before
    {
        pointer-events: none;
        z-index: -1;
        position: absolute;
        content: '';
        bottom: -9rem;
        right: -16.5rem;
        background-color: ${({ theme }) => theme.colors.accent};
        opacity: 0.8;
        border-radius: inherit;
        height: ${({ isExpanded }) => isExpanded ? '30rem' : '0'};
        width: ${({ isExpanded }) => isExpanded ? '30rem' : '0'};
        transition: all 0.2s ease-in;
    }

`

const Menu = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 0.9em;
    font-size: 1.3rem;
    bottom: 6.5rem;
    right: 1rem;
    align-items: flex-end;
`

const Button = styled.button`
    pointer-events: initial;
    background-color: transparent;
    font-size: 1.1em;
    font-weight: 600;
    transition: color 0.2s ease-in;
`

export default function MobileNavigation()
{
    const [isExpanded, toggleExpanded] = useReducer((prev) => !prev, false)

    return (
        <Navigation>

            <AnimatePresence>
                {isExpanded &&
                    <Menu initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3 } }}
                        exit={{ x: 400, y: 50, transition: { duration: 0.1 } }}>
                        <Button onClick={() => scrollTo('start')}>Start</Button>
                        <Button onClick={() => scrollTo('offer')}>Oferta</Button>
                        <Button onClick={() => scrollTo('steps')}>Jak zamówić?</Button>
                        <Button onClick={() => scrollTo('contact')}>Kontakt</Button>
                    </Menu>}
            </AnimatePresence>

            <ExpandButton isExpanded={isExpanded} onClick={toggleExpanded}>
                <AnimatePresence>
                    {isExpanded ? <RiCloseFill /> : <RiMenuFill />}
                </AnimatePresence>
            </ExpandButton>
        </Navigation >
    )
}
