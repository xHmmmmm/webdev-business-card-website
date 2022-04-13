import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { ContentSection, ContentWrapper } from "components/Styled";

const StartSection = styled(ContentSection)`
    grid-area: content;
    max-height: calc(100vh - 110px);
    min-height: 70vh;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    /* grid-template-rows: 1fr; */
    align-items: center;
    overflow: visible;
    background-color: ${({ theme }) => theme.colors.liteGrayBg};

    .main-image
    {
        img
        {
            height: 100%;
            width: 100%;
        }
    }
`

const ContentContainer = styled(ContentWrapper)`
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3em;
`

// const StartSection = styled.section`
//     grid-area: content;
//     height: calc(100vh - 110px);
//     max-width: ${({ theme }) => theme.standardScreen};
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 1fr;
//     align-items: center;
//     overflow: visible;
//     background-color: ${({ theme }) => theme.colors.liteGrayBg};

//     .main-image
//     {
//         img
//         {
//             height: 90%;
//             width: 90%;
//         }
//     }
// `

const TextWrapper = styled.div`
    display: grid;
    grid-template-columns: min-content;
    grid-auto-rows: min-content;
    gap: 1rem;
    font-size: clamp(0.4rem, 0.4vw, 1rem);
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
    font-size: 2em;
    padding: 0.8em 1.5em;
    background-color: ${({ theme }) => theme.colors.accent};
    font-weight: 700;
    border-radius: 3px;
    transition: background-color 0.2s ease-in-out;
    margin-right: auto;
    
    :hover
    {
        background-color: ${({ theme }) => theme.colors.accentHover};
    }
`

const StartPage = React.forwardRef((props, ref) =>
{
    return (
        <StartSection id='start' ref={ref}>
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
                    <StartButton>Rozpocznij</StartButton>
                </TextWrapper>

                <StaticImage className="main-image"
                    src='../../../images/main.png'
                    width={2000}
                    height={2000} />
            </ContentContainer>
        </StartSection>
    )
})

export default StartPage