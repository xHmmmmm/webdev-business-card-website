import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.accent};
    min-height: 2em;
    z-index: 2;
`

export default function Topbar()
{

    return (
        <Wrapper>

        </Wrapper>
    )
}
