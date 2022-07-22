import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr min-content;
    gap: clamp(1em, 1.5vw, 2em);

    @media(hover)
    {            
        :hover
        {
            cursor: default;
            p, svg
            {
                background-position: 0 -100%;
            }

            svg
            {
                fill: ${({ theme }) => theme.colors.accent};
                transform: scale(1.2);
            }
        }
    }

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
        font-size: 3.7em;
        font-size: clamp(1em, 4vw, 5em);
        transition: all 300ms ease;
        transition-property: transform, fill;
    }

    @media (max-width: ${({ theme }) => theme.mobileScreen})
    {
        aspect-ratio: initial;
    }
`

const Title = styled.p`
    text-align: center;
    white-space: pre-wrap;
    font-size: clamp(0.7em, 1.5vw, 2em);
    font-weight: 900;
    font-family: Jost;
    width: 80%;
    
    background: linear-gradient(135deg, rgba(255,173,50,1) 50%, rgba(17,17,17,1) 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 220% 100%;
    background-position: 100%;
    transition: background-position 400ms ease;
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
