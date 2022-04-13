import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.8em;
`

const StepNumber = styled.p`
    padding: 0.7em 0.8em;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.liteFont};
    font-size: 1.3em;
    font-weight: 600;
    border-radius: 4px;
`

const Title = styled.h3`
    text-align: center;
    white-space: pre-wrap;
    font-size: clamp(0.7rem, 1.85vw, 1.4rem);
    font-weight: 900;
    width: 80%;
`

const Text = styled.p`
    white-space: pre-wrap;
    line-height: 1.4;
    font-size: clamp(0.5rem, 1.35vw, 1rem);
    font-weight: 400;
    text-align: center;
    width: 85%;
`

export default function Step({ number, title, text })
{
    return (
        <Wrapper>
            <StepNumber>Krok {number}</StepNumber>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Wrapper>
    )
}
