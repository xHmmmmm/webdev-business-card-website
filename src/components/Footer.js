import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import { ContentWrapper } from "components/Styled";
import { RiMailSendLine, RiPhoneFill, RiRoadMapLine } from 'react-icons/ri'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.accent};
`

const ContentContainer = styled(ContentWrapper)`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    'copyright info'
    'imageNotice info';
    align-items: center;
    padding: 0 5em;
    gap: 0.7em;
`

const CopyrightNotice = styled.p`
    grid-area: copyright;
    font-size: 3.2em;
    color: ${({ theme }) => theme.colors.liteFont};
    font-weight: 700;
    margin-top: auto;
    `

const ImageNotice = styled.p`
    grid-area: imageNotice;
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.liteFont};
    font-weight: 700;
    margin-bottom: auto;
`

const ContactInformation = styled.div`
    grid-area: info;
    display: grid;
    grid-template-columns: min-content min-content;
    grid-auto-rows: min-content;
    justify-self: flex-end;
    gap: 1.5em;

    > svg
    {
        font-size: 1.5rem;
        margin-top: 0.1rem;
        fill: ${({ theme }) => theme.colors.liteFont};
    }
`

const InfoText = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.liteFont};
    line-height: 1.3;
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
