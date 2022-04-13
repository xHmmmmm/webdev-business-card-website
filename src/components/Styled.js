import styled from "styled-components"

export const ContentSection = styled.section`
    display: grid;
    justify-content: center;
    grid-template-rows: min-content 1fr;
    `

export const ContentWrapper = styled.div`
    display: grid;
    font-size: clamp(0.7rem, 0.8%, 1rem);
    padding: 3em;
    max-width: ${({ theme }) => theme.standardScreen};
    width: 100%;
`