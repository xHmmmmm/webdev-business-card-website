import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import Heading from 'components/Heading';
import { ContentSection, ContentWrapper } from "components/Styled";
import Faq from 'components/pages/contact-page/Faq';
import ContactForm from "components/pages/contact-page/ContactForm";

const StyledSection = styled(ContentSection)`
    background-color: ${({ theme }) => theme.colors.whiteBg};
`

const ContentContainer = styled(ContentWrapper)`
    grid-template-columns: 1fr 0.8fr;
    grid-template-rows: min-content 1fr;
    grid-template-areas: 
    'heading heading'
    'faq form';
    gap: 3em clamp(5rem, 2vw, 7rem);
`

const ContactPage = React.forwardRef((props, ref) =>
{
    return (
        <StyledSection id='contact' ref={ref}>
            <ContentContainer>
                <Heading title='KONTAKT' subtitle='Napisz do nas!' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed diam fermentum, pellentesque nulla a, euismod arcu. Nullam auctor tortor condimentum pretium ultrices.' />

                <Faq />
                <ContactForm />

            </ContentContainer>
        </StyledSection>
    )
})

export default ContactPage