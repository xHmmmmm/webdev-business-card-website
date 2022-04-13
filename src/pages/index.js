import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "components/Layout"
import Seo from "components/Seo"
import StartPage from 'components/pages/start-page/StartPage'
import OfferPage from 'components/pages/offer-page/OfferPage'
import StepsPage from 'components/pages/steps-page/StepsPage'
import ContactPage from 'components/pages/contact-page/ContactPage'
import { useInView } from 'react-intersection-observer';

export default function IndexPage()
{
    const [startRef, startInView, entry] = useInView({ threshold: 0, })
    const [offersRef, offersInView] = useInView({ threshold: 1 })
    const [stepsRef, stepsInView] = useInView({ threshold: 1 })
    const [contactRef, contactInView] = useInView({ threshold: 1, })
    const [currentId, setCurrentId] = useState('start')

    useEffect(() =>
    {
        if (startInView) setCurrentId('start')
        if (offersInView) setCurrentId('offers')
        if (stepsInView) setCurrentId('steps')
        if (contactInView) setCurrentId('contact')
    }, [startInView, offersInView, stepsInView, contactInView])

    return (
        <Layout currentId={currentId}>
            <Seo title="Home" />

            <StartPage inView={startInView} ref={startRef} />
            <OfferPage inView={offersInView} ref={offersRef} />
            <StepsPage inView={stepsInView} ref={stepsRef} />
            <ContactPage inView={contactInView} ref={contactRef} />
        </Layout>
    )

}