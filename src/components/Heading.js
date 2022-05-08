import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import { useView } from 'contexts/ViewContext';

const Wrapper = styled.div`
    grid-area: heading;
    max-width: ${({ theme }) => theme.standardScreen};
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr min-content;
    grid-template-areas: 
    'title text'
    'subtitle text';
    gap: 0.5em 1.5em;
    align-items: space-between;
    color: ${({ theme }) => theme.colors.accent};

    @media (max-width: ${({ theme }) => theme.mobileScreen})
    {
        grid-template-columns: 1fr;
        grid-template-rows: min-content min-content;
        grid-template-areas: 
        'title'
        'subtitle';
    }
`

const Title = styled.h2`
    grid-area: title;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
`

const Subtitle = styled.h3`
    grid-area: subtitle;
    font-size: clamp(1.3em, 1.2vw, 2.1em);
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 400;
`

const Text = styled.p`
    grid-area: text;
    text-align: right;
    font-size: clamp(0.8em, 1vw, 1.4em);
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
    line-height: 1.2;
`

export default function Heading({ title, subtitle, text })
{
    const { isMobile } = useView()

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {!isMobile && <Text>{text}</Text>}
        </Wrapper>
    )
}
