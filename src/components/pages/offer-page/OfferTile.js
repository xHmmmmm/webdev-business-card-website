import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr min-content;
    gap: clamp(1em, 1.5vw, 2em);

    @media (max-width: ${({ theme }) => theme.mobileScreen})
    {
        max-width: ${({ theme }) => theme.narrowMobileScreen};
        width: 100%;
        justify-self: center;
    }
`

const Tile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    border-radius: 4px;
    box-shadow: 0px 0px 29px 10px rgba(0, 0, 0, 0.05);
    gap: 0.5em;
    padding: 1em 0;
    
    > svg
    {
        font-size: 3.5em;
    }

    @media (max-width: ${({ theme }) => theme.mobileScreen})
    {
        aspect-ratio: initial;
    }
`

const Title = styled.h3`
    text-align: center;
    white-space: pre-wrap;
    font-size: clamp(0.7em, 1.5vw, 2.5em);
    font-weight: 900;
    width: 80%;
`

const Text = styled.p`
    line-height: 1.4;
    font-size: clamp(0.7em, 0.8vw, 1.5em);
    font-weight: 400;
    text-align: justify;
`

export default function OfferTile({ title, text, icon })
{
    return (
        <Wrapper>
            <Tile>
                {icon}
                <Title>{title}</Title>
            </Tile>
            <Text>{text}</Text>
        </Wrapper>
    )
}
