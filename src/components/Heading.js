import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    grid-area: heading;
    max-width: ${({ theme }) => theme.standardScreen};
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 4fr;
    grid-template-rows: 1fr min-content;
    /* align-items: flex-end; */
    grid-template-areas: 
    'title text'
    'subtitle text';
    gap: 0.5em 1.5em;
    align-items: space-between;
    color: ${({ theme }) => theme.colors.accent};
`

const Title = styled.h1`
    grid-area: title;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 400;
`

const Subtitle = styled.h2`
    grid-area: subtitle;
    font-size: 2.1em;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
`

const Text = styled.p`
    grid-area: text;
    text-align: right;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
    line-height: 1.2;
`

export default function Heading({ title, subtitle, text })
{
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{text}</Text>
        </Wrapper>
    )
}
