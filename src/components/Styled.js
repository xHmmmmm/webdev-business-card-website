import styled from "styled-components"

export const ContentSection = styled.section`
    display: flex;
    justify-content: center;
    scroll-margin-top: 10vh;
`

export const ContentWrapper = styled.div`
    display: grid;
    /* font-size: clamp(0.7rem, 0.8%, 1rem); */
    padding: 3em;
    max-width: ${({ theme }) => theme.narrowStandardScreen};
    width: 100%;
    /* font-size: 0.7rem; */

    /* @media (min-width: ${({ theme }) => theme.hdScreen}) 
    {
        max-width: ${({ theme }) => theme.narrowHdScreen};
        font-size: 0.5rem;
        padding: 1em;
    }

    @media (min-width: ${({ theme }) => theme.narrowStandardScreen}) 
    {
        max-width: ${({ theme }) => theme.hdScreen};
        font-size: 0.7rem;
        padding: 2em;
    }

    @media (min-width: ${({ theme }) => theme.standardScreen}) 
    {
        max-width: ${({ theme }) => theme.narrowScreen};
    } */


    @media (max-width: ${({ theme }) => theme.narrowStandardScreen}) 
    {
        max-width: ${({ theme }) => theme.hdScreen};
        /* font-size: 0.8rem; */
    }
    
    @media (max-width: ${({ theme }) => theme.narrowScreen}) 
    {
        max-width: ${({ theme }) => theme.narrowHdScreen};
        /* font-size: 0.8rem; */
        padding: 2.5em 1em;
    }
`