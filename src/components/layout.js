import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/navigation/Header"
import { GlobalStyle } from 'styles/GlobalStyle';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { theme } from 'styles/theme/theme';
import ViewContextProvider from "contexts/ViewContext";
import Footer from "components/Footer";
import fonts from 'styles/fonts.css'

const Wrapper = styled.div`
    overflow-y: auto;
    scroll-behavior: smooth;
`

const MainContent = styled.main`

`

function Layout({ children, currentId })
{

    return (
        <ThemeProvider theme={theme}>
            <ViewContextProvider>
                <GlobalStyle />
                <Header currentId={currentId} />
                <Wrapper>
                    <MainContent>{children}</MainContent>
                    <Footer />
                </Wrapper>
            </ViewContextProvider>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
