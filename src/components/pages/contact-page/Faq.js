import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import Question from "components/pages/contact-page/Question"

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr min-content;
    gap: 1.5em;
`

const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: clamp(1em, 2vw, 1.8em);
    white-space: nowrap;

    ::before, ::after
    {
        content: '';
        height: 3px;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.liteGrayBg};
    }

    ::after { margin-left: 0.7em; }
    ::before { margin-right: 0.7em; }

`

const Questions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7em;
`

const answer = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada placerat interdum. Etiam tempor turpis nulla, ac feugiat dolor condimentum a. Praesent tincidunt est ipsum, vitae scelerisque tortor dictum sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquam nec quam ut mattis. Proin egestas, sem ac fringilla porta, diam urna luctus diam, quis interdum erat tortor in eros. Vivamus blandit, dolor eu porta rutrum, velit lectus consectetur dolor, quis gravida nunc felis eget mi.'

export default function Faq()
{
    const [openId, setOpenId] = useState(0)

    function toggleOpen(id)
    {
        setOpenId(id)
    }

    return (
        <Wrapper>
            <Title>Często zadawane pytania</Title>
            <Questions>
                <Question id={0} question='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' answer={answer} openId={openId} toggleOpen={toggleOpen} />
                <Question id={1} question='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' answer={answer} openId={openId} toggleOpen={toggleOpen} />
                <Question id={2} question='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' answer={answer} openId={openId} toggleOpen={toggleOpen} />
                <Question id={3} question='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' answer={answer} openId={openId} toggleOpen={toggleOpen} />
                <Question id={4} question='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' answer={answer} openId={openId} toggleOpen={toggleOpen} />
                <Question id={5} question='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' answer={answer} openId={openId} toggleOpen={toggleOpen} />
            </Questions>
        </Wrapper>
    )
}
