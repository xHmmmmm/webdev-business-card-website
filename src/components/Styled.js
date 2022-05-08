import styled from "styled-components"

export const ContentSection = styled.section`
    display: flex;
    justify-content: center;
    /* scroll-margin-top: 10vh; */
`

export const ContentWrapper = styled.div`
    display: grid;
    padding: 3em;
    max-width: ${({ theme }) => theme.narrowStandardScreen};
    width: 100%;

    @media (max-width: ${({ theme }) => theme.narrowStandardScreen}) 
    {
        max-width: ${({ theme }) => theme.hdScreen};
    }
    
    @media (max-width: ${({ theme }) => theme.narrowScreen}) 
    {
        max-width: ${({ theme }) => theme.narrowHdScreen};
        padding: 2.5em 1em;
    }
`