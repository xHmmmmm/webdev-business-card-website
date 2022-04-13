import React, { useState, useEffect, useReducer, useLayoutEffect } from 'react'
import styled from "styled-components"
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const Wrapper = styled.div`
    min-height: ${({ isOpen }) => isOpen ? '5rem' : '2rem'};
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-auto-rows: min-content;
    grid-auto-flow: row;
    gap: 0.7em;
    padding: 1em;
    border-radius: 4px;
    border: 2px ${({ theme }) => theme.colors.liteGrayBg} solid;
    align-items: center;
    cursor: pointer;
`

const QuestionText = styled.p`
    font-weight: 700;
    font-size: 1.2em;
    overflow: ${({ isOpen }) => !isOpen && 'hidden'};
    white-space: ${({ isOpen }) => !isOpen && 'nowrap'};
    text-overflow: ${({ isOpen }) => !isOpen && 'ellipsis'};
    
    /* overflow: hidden; */
    /* white-space: nowrap; */
    /* text-overflow: ellipsis; */
`

const ArrowIcon = styled(RiArrowUpSLine)`
    transform: ${({ isOpen }) => isOpen && 'rotate(-180deg)'};
    transition: transform 0.2s linear;
    font-size: 1.7em;
`

const AnswerText = styled.p`
    font-weight: 500;
    font-size: 1.1em;
    line-height: 1.4;
    grid-column: span 2;
    color: ${({ theme }) => theme.colors.semiDarkFont};
`

export default function Question({ id, openId, question, answer, toggleOpen })
{
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() =>
    {
        if (id === openId) setIsOpen(true)
        else setIsOpen(false)
    }, [openId])

    return (
        <Wrapper isOpen={isOpen} onClick={() => toggleOpen(id)}>
            <QuestionText isOpen={isOpen}>{question}</QuestionText>
            <ArrowIcon isOpen={isOpen} />
            {isOpen && <AnswerText>{answer}</AnswerText>}
        </Wrapper>
    )
}
