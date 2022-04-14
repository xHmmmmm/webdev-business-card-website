import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.8em;
    
    @media (max-width: ${({ theme }) => theme.mobileScreen})
    {
        max-width: ${({ theme }) => theme.narrowMobileScreen};
        width: 100%;
    }
`

const StepNumber = styled.p`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.liteFont};
    font-size: clamp(1.1em, 1.1vw, 1.6em);
    padding: clamp(0.3em, 0.7vw, 0.7em);
    font-weight: 600;
    border-radius: 4px;
`

const Title = styled.h3`
    text-align: center;
    white-space: pre-wrap;
    font-size: clamp(1.1em, 1.1vw, 2em);
    font-weight: 900;
    width: 80%;
`

const Text = styled.p`
    white-space: pre-wrap;
    line-height: 1.4;
    font-size: clamp(0.7em, 0.8vw, 1.5em);
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
