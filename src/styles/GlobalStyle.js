const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`

    html
    {
        height: 100%;
        width: 100%;
        display: flex;
    }

    body
    {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow-y: hidden;
    }
    
    #___gatsby, #gatsby-focus-wrapper
    {
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-rows: min-content 1fr;
    }
    
    *, *::before, *::after
    {
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        -webkit-tap-highlight-color: transparent;
        margin: 0;
        padding: 0;
        font-family: Ubuntu;
        color: ${({ theme }) => theme.colors.darkFont};
    }

    button
    {
        border: none;
        outline: none;
        cursor: pointer;
    }

    a
    {
        cursor: pointer;
    }

    a:link, a:visited, a:hover, a:active
    {
        color: inherit;
    }
`
