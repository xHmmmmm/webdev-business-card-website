import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import Heading from 'components/Heading';
import { ContentSection, ContentWrapper } from "components/Styled";
import OfferTile from 'components/pages/offer-page/OfferTile';
import { RiPencilRuler2Line, RiCodeLine, RiToolsFill } from 'react-icons/ri'

const StyledSection = styled(ContentSection)`
    background-color: ${({ theme }) => theme.colors.whiteBg};
    display: grid;
`

const ContentContainer = styled(ContentWrapper)`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content 1fr;
    grid-template-areas: 
    'heading heading heading'
    'tile tile tile';
    gap: 3em clamp(1.2rem, 2vw, 2rem);
`

export default function OfferPage()
{
    return (
        <StyledSection>
            <ContentContainer>
                <Heading title='OFERTA' subtitle='Usługi dopasowane do Twoich potrzeb.' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed diam fermentum, pellentesque nulla a, euismod arcu. Nullam auctor tortor condimentum pretium ultrices.' />

                <OfferTile title='PROJEKT STRONY INTERNETOWEJ' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed diam fermentum, pellentesque nulla a, euismod arcu. Nullam auctor tortor condimentum pretium ultrices.' icon={<RiPencilRuler2Line />} />
                <OfferTile title='WYKONANIE STRONY INTERNETOWEJ' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed diam fermentum, pellentesque nulla a, euismod arcu. Nullam auctor tortor condimentum pretium ultrices.' icon={<RiCodeLine />} />
                <OfferTile title={`UTRZYMANIE\nI ROZWÓJ`} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed diam fermentum, pellentesque nulla a, euismod arcu. Nullam auctor tortor condimentum pretium ultrices.' icon={<RiToolsFill />} />
            </ContentContainer>
        </StyledSection>
    )
}
