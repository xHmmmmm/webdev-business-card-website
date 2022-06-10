import React, { useState, useEffect, useReducer } from 'react'
import styled from "styled-components"
import { RiQuestionLine, RiFileUploadLine } from 'react-icons/ri'
import { useView } from 'contexts/ViewContext';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: clamp(0.5em, 1vw, 0.7em);

    @media (max-width: ${({ theme }) => theme.narrowHdScreen})
    {
        max-width: ${({ theme }) => theme.mobileScreen};
        width: 100%;
        justify-self: center;
    }
`

const Label = styled.label`
    font-size: clamp(1.1em, 1.5vw, 1.4em);
    font-weight: 700;
    font-family: Jost;
`

const MessageType = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
    margin-bottom: 0.5em;
`

const TypeButton = styled.button`
    font-size: clamp(1.1em, 1vw, 1.3em);
    padding: 0.8em;
    background-color: ${({ theme, isSelected }) => isSelected ? `${theme.colors.accent} !important` : theme.colors.liteGrayBg};
    font-weight: ${({ isSelected }) => isSelected ? '700' : '500'};

    border-radius: 3px;
    transition: background-color 0.2s ease-in-out;
    font-family: Jost;

    :hover
    {
        background-color: ${({ theme }) => theme.colors.liteGrayBgHover};
    }
`

const Input = styled.input`
    font-size: clamp(1em, 1.6vw, 1.3em);
    padding: 0.8em;
    margin-bottom: 0.5em;
    background-color: ${({ theme }) => theme.colors.liteGrayBg};
    border-radius: 3px;
`

const MessageTextarea = styled.textarea`
    font-size: clamp(1em, 1vw, 0.8em);
    padding: 0.8em;
    margin-bottom: 0.5em;
    background-color: ${({ theme }) => theme.colors.liteGrayBg};
    border-radius: 3px;
    resize: none;
    flex: 1;
`

const Hint = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    cursor: help;

    > svg
    {
        fill: ${({ theme }) => theme.colors.semiDarkFont};
        font-size: clamp(1.1em, 1.5vw, 1.4em);
    }

    ::after
    {
        font-size: 0.8em;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.semiDarkFont};
        position: absolute;
        width: max-content;
        content: "Możesz przesłać obrazy lub dokumenty";
        transform: translate(-100%, 100%);
        border-radius: 3px 0 3px 3px;
        padding: 0.5em;
        border: 1px ${({ theme }) => theme.colors.liteGrayBgHover} solid;
        background-color: ${({ theme }) => theme.colors.whiteBg};
        user-select: none;
        opacity: 0;
        transition: opacity 0.3s linear;
    }

    :hover
    {
        ::after
        {
            opacity: 1;
        }
    }
`

const FileGroup = styled.fieldset`
    display: flex;
    margin-bottom: 0.5em;
    border: none;
    gap: 1em;
`

const FileInput = styled.input`
    flex: 1;
    cursor: pointer;
`

const SendButton = styled.button`
    font-size: clamp(1.1em, 1vw, 1.5em);
    padding: 0.8em;
    background-color: ${({ theme }) => theme.colors.accent};
    font-weight: 700;
    border-radius: 3px;
    transition: background-color 0.2s ease-in-out;
    font-family: Jost;

    :hover
    {
        background-color: ${({ theme }) => theme.colors.accentHover};
    }
`

export default function ContactForm()
{
    const [messageType, setMessageType] = useState('question')

    const { isMobile } = useView()

    function submitForm(e)
    {
        const form = document.querySelector('#contact-form')
        console.log(form)
        const formData = new FormData(form)
        const url = 'https://formsubmit.co/703abe1fe797559b01b1e4e9877d92bf'

        fetch(
            url,
            {
                method: 'POST',
                body: formData,
            }
        )

        form.reset()
        e.preventDefault()
    }

    return (
        <Form id="contact-form" onSubmit={submitForm} enctype="multipart/form-data">
            <Label>Rodzaj wiadomości</Label>
            <MessageType>
                <TypeButton type="button" isSelected={messageType === 'question'} onClick={() => setMessageType('question')}>Pytanie</TypeButton>
                <TypeButton type="button" isSelected={messageType === 'order'} onClick={() => setMessageType('order')}>Zamówienie</TypeButton>
                <TypeButton type="button" isSelected={messageType === 'offer'} onClick={() => setMessageType('offer')}>Oferta</TypeButton>
            </MessageType>
            <input type="hidden" name="message-type" value={messageType} />
            <Label>Adres e-mail</Label>
            <Input type='text' name='email' />
            <Label>Temat</Label>
            <Input type='text' name='subject' />
            <Label>Wiadomość</Label>
            <MessageTextarea name='message' />
            <FileGroup>
                <FileInput type="file" multiple={true} name="attachment" accept="image/png, image/jpeg, .pdf, .doc, .docx" />
                {!isMobile && <Hint>
                    <RiQuestionLine />
                </Hint>}
            </FileGroup>
            <input type="hidden" name="_captcha" value="false" />
            <SendButton>Wyślij</SendButton>
        </Form>
    )


}
