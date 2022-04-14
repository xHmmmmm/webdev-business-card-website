import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* grid-auto-rows: max-content; */
    gap: clamp(0.5em, 1vw, 0.7em);

    @media (max-width: ${({ theme }) => theme.narrowHdScreen})
    {
        max-width: ${({ theme }) => theme.mobileScreen};
        width: 100%;
        justify-self: center;
    }
`

const Label = styled.label`
    font-size: clamp(1em, 1.5vw, 1.3em);
    font-weight: 700;
`

const MessageType = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
    margin-bottom: 0.5em;
`

const TypeButton = styled.button`
    font-size: clamp(1em, 1vw, 1.5em);
    padding: 0.8em;
    background-color: ${({ theme, isSelected }) => isSelected ? `${theme.colors.accent} !important` : theme.colors.liteGrayBg};
    font-weight: ${({ isSelected }) => isSelected ? '700' : '500'};
    border-radius: 3px;
    transition: background-color 0.2s ease-in-out;

    :hover
    {
        background-color: ${({ theme }) => theme.colors.liteGrayBgHover};
    }
`

const Field = styled.input`
    font-size: clamp(1em, 2vw, 1.5em);
    padding: 0.8em;
    margin-bottom: 0.5em;
    background-color: ${({ theme }) => theme.colors.liteGrayBg};
    border-radius: 3px;
`

const MessageTextarea = styled.textarea`
    font-size: clamp(1em, 2vw, 1.5em);
    padding: 0.8em;
    margin-bottom: 0.5em;
    background-color: ${({ theme }) => theme.colors.liteGrayBg};
    border-radius: 3px;
    resize: none;
    flex: 1;
`

const SendButton = styled.button`
    font-size: clamp(1em, 1vw, 1.5em);
    padding: 0.8em;
    background-color: ${({ theme }) => theme.colors.accent};
    font-weight: 700;
    border-radius: 3px;
    transition: background-color 0.2s ease-in-out;
    
    :hover
    {
        background-color: ${({ theme }) => theme.colors.accentHover};
    }
`

export default function ContactForm()
{
    const [messageType, setMessageType] = useState('question')

    return (
        <Wrapper>
            <Label>Rodzaj wiadomości</Label>
            <MessageType>
                <TypeButton isSelected={messageType === 'question'} onClick={() => setMessageType('question')}>Pytanie</TypeButton>
                <TypeButton isSelected={messageType === 'order'} onClick={() => setMessageType('order')}>Zamówienie</TypeButton>
                <TypeButton isSelected={messageType === 'offer'} onClick={() => setMessageType('offer')}>Oferta</TypeButton>
            </MessageType>
            <Label>Adres e-mail</Label>
            <Field type='text' />
            <Label>Temat</Label>
            <Field type='text' />
            <Label>Wiadomość</Label>
            <MessageTextarea />
            <SendButton>Wyślij</SendButton>
        </Wrapper>
    )
}
