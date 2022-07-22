import React, { useEffect, useState } from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import StartPage from '../components/pages/start-page/StartPage'
import OfferPage from '../components/pages/offer-page/OfferPage'
import StepsPage from '../components/pages/steps-page/StepsPage'
import ContactPage from '../components/pages/contact-page/ContactPage'

export default function IndexPage()
{

    return (
        <Layout>
            <Seo title="Home" />
            <StartPage />
            <OfferPage />
            <StepsPage />
            <ContactPage />
        </Layout>
    )

}