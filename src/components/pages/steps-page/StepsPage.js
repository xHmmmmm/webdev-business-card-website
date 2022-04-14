import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import Heading from 'components/Heading';
import { ContentSection, ContentWrapper } from "components/Styled";
import Step from "components/pages/steps-page/Step";

const StyledSection = styled(ContentSection)`
    background-color: ${({ theme }) => theme.colors.liteGrayBg};
`

const ContentContainer = styled(ContentWrapper)`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content 1fr 1fr;
    grid-template-areas: 
    'heading heading heading'
    'step step step'
    'step step step';
    gap: 3em 2.5em;

    @media (max-width: ${({ theme }) => theme.narrowHdScreen})
    {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: min-content repeat(3, 1fr);
        grid-template-areas: 
        'heading heading'
        'step step'
        'step step'
        'step step';
    }

    @media (max-width: ${({ theme }) => theme.mobileScreen})
    {
        grid-template-columns: 1fr;
        grid-template-rows: min-content repeat(6, 1fr);
        grid-template-areas: 
        'heading'
        'step'
        'step'
        'step'
        'step'
        'step'
        'step'
    }
`

const StepsPage = React.forwardRef((props, ref) =>
{
    return (
        <StyledSection id='steps' ref={ref}>
            <ContentContainer>
                <Heading title='JAK ZAMÓWIĆ?' subtitle='Proces zamawiania krok po kroku.' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed diam fermentum, pellentesque nulla a, euismod arcu. Nullam auctor tortor condimentum pretium ultrices.' />

                <Step number='1' title={`Kontaktujesz\nsię z nami`} text={`Przedstawiasz nam swoje oczekiwania w stosunku do projektu oraz określasz rodzaje treści jakie chciałbyś umieścić na stronie.`} />

                <Step number='2' title={`Zapoznajemy się\nz Twoimi wymaganiami`} text={`Analizujemy Twoje oczekiwania i ustalamy czy jesteśmy w stanie je zrealizować oraz wstępnie wyceniamy projekt. `} />

                <Step number='3' title={`Otrzymujesz\nodpowiedź z wyceną`} text={`Przesyłamy Ci wstępną wycenę projektu wraz z orientacyjnym czasem realizacji oraz ewentualnymi uwagami z naszej strony.`} />

                <Step number='4' title={`Podejmujesz\ndecyzję`} text={`Po zapoznaniu się z naszą propozycją zatwierdzasz realizację projektu i opłacasz zaliczkę, a my rozpoczynamy pracę.`} />

                <Step number='5' title={`Pozostajemy\nw kontakcie`} text={`W trakcie realizacji projektu będziemy się z tobą kontaktować w celu rozwiania ewentualnych wątpliwości i ustalenia szczegółów.`} />
                <Step number='6' title={`Otrzymujesz\nfinalny produkt`} text={`Po otrzymaniu gotowej strony, pomożemy Ci z jej publikacją w Internecie lub zrobimy to za Ciebie jako usługę dodatkową.`} />
            </ContentContainer>
        </StyledSection>
    )
})

export default StepsPage