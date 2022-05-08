import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { ContentSection, ContentWrapper } from "components/Styled";
import { scrollTo } from "../../../utils";

const StartSection = styled(ContentSection)`
    grid-area: content;
    max-height: calc(100vh - 110px);
    min-height: 70vh;
    align-items: center;
    overflow: visible;
    background-color: ${({ theme }) => theme.colors.liteGrayBg};
    min-width: 100%;

    @media (max-width: ${({ theme }) => theme.mobileScreen})
    {
        min-height: 85vh;
        .main-image
        {
            order: -1;
            max-height: 100%;
            margin: 2rem;

            img
            {
                aspect-ratio: 1;
            }
        }
    }
`

const ContentContainer = styled(ContentWrapper)`
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3em;
    
    @media (max-width: ${({ theme }) => theme.mobileScreen})
    {
        max-height: 85vh;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        padding: 0;
        place-items: center;
    }
`

const TextWrapper = styled.div`
    display: grid;
    grid-template-columns: min-content;
    grid-auto-rows: min-content;
    gap: 1rem;
    font-size: clamp(0.4rem, 0.8vw, 0.7rem);
    place-items: flex-start;

    @media (max-width: ${({ theme }) => theme.mobileScreen})
    {
        place-items: center;
    }
`

const Title = styled.h1`
    font-size: 4em;
    white-space: nowrap;
    `

const Subtitle = styled.h2`
    font-size: 3em;
    font-weight: 500;
    white-space: nowrap;
`

const StartButton = styled.button`
    font-size: 2.5em;
    padding: 0.8em 1.5em;
    background-color: ${({ theme }) => theme.colors.accent};
    font-weight: 700;
    border-radius: 3px;
    transition: background-color 0.2s ease-in-out;
    
    :hover
    {
        background-color: ${({ theme }) => theme.colors.accentHover};
    }
`

export default function StartPage()
{
    return (
        <StartSection id='start'>
            <ContentContainer>

                <TextWrapper>
                    <Title>
                        Strona internetowa<br />
                        dla Twojego biznesu
                    </Title>
                    <Subtitle>
                        Zaprezentuj się swoim klientom<br />
                        od najlepszej strony. Pomożemy!
                    </Subtitle>
                    <StartButton onClick={() => scrollTo("offer")}>Rozpocznij</StartButton>
                </TextWrapper>

                <StaticImage className="main-image"
                    src='../../../images/main.png'
                    width={2000}
                    height={2000} />
            </ContentContainer>
        </StartSection>
    )
}