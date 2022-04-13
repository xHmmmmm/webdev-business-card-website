import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr min-content;
    gap: 2.5em;
    gap: clamp(1.5rem, 1.5vw, 2rem);
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
    
    > svg
    {
        font-size: 3.5em;
    }
    `

const Title = styled.h3`
    text-align: center;
    white-space: pre-wrap;
    font-size: clamp(0.8rem, 2vw, 1.5rem);
    font-weight: 900;
    width: 80%;
`

const Text = styled.p`
    line-height: 1.4;
    font-size: clamp(0.7rem, 1.5vw, 1rem);
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
