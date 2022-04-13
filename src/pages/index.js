import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "components/Layout"
import Seo from "components/Seo"
import StartPage from 'components/pages/start-page/StartPage'
import OfferPage from 'components/pages/offer-page/OfferPage'
import StepsPage from 'components/pages/steps-page/StepsPage'

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <StartPage />
        <OfferPage />
        <StepsPage />
    </Layout>
)

export default IndexPage
