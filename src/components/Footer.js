import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import { ContentWrapper } from "components/Styled";
import { RiMailSendLine, RiPhoneFill, RiRoadMapLine } from 'react-icons/ri'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.accent};
`

const ContentContainer = styled(ContentWrapper)`
    grid-template-columns: 1fr min-content;
    grid-auto-rows: min-content;
    grid-template-areas: 
    'copyright info'
    'imageNotice info';
    align-items: center;
    max-width: 1000px;
    max-height: 80%;
    padding: 0;
    gap: 0.7em;

    @media (max-width: ${({ theme }) => theme.mobileScreen}) 
    {
        grid-template-columns: 1fr;
        grid-template-areas:
        'copyright'
        'imageNotice'
        'info';
        place-items: center;
    }
`

const CopyrightNotice = styled.p`
    grid-area: copyright;
    font-size: clamp(1em, 7vw, 2em);
    color: ${({ theme }) => theme.colors.liteFont};
    font-weight: 700;
    align-self: flex-end;
`

const ImageNotice = styled.p`
    grid-area: imageNotice;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.liteFont};
    font-weight: 700;
    margin-bottom: auto;
`

const ContactInformation = styled.div`
    grid-area: info;
    display: grid;
    grid-template-columns: min-content min-content;
    grid-auto-rows: min-content;
    gap: 1rem;
    align-items: center;

    font-size: clamp(1em, 5vw, 1.3em);

    > svg
    {
        font-size: 1.5em;
        margin-top: 0.1em;
        fill: ${({ theme }) => theme.colors.liteFont};
    }

    @media (max-width: ${({ theme }) => theme.mobileScreen}) 
    {
        gap: 0.5rem;
        margin-top: 1em;
    }
`

const InfoText = styled.p`
    font-size: 1em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.liteFont};
    /* line-height: 1.3; */
`

export default function Footer()
{
    return (
        <StyledFooter>
            <ContentContainer>
                <CopyrightNotice>
                    © Copyright {new Date().getFullYear()}
                </CopyrightNotice>

                <ImageNotice>
                    Main image from pngtree.com
                </ImageNotice>

                <ContactInformation>

                    <RiMailSendLine />
                    <InfoText>
                        <a href='mailto:example@example.com'>example@example.com</a>
                    </InfoText>

                    <RiPhoneFill />
                    <InfoText>
                        +48 123 456 789
                    </InfoText>

                    <RiRoadMapLine />
                    <InfoText>
                        ul. Przykładowa 10<br />
                        20-123 Lublin
                    </InfoText>

                </ContactInformation>
            </ContentContainer>
        </StyledFooter>
    )
}
