import React from 'react'
import HomePageLandingSection from '../components/HomePageLandingSection'
import AboutUsSection from '../components/AboutUsSection'
import FestivalSection from '../components/FestivalSection'
import TestimonailSection from '../components/TestimonailSection'
import WhyUsSection from '../components/WhyUsSection'
import Newsletter from '../components/Newsletter'
import ScrollVideoSection from '../components/ScrollVideoSection'
import JetExpeditions from '../components/JetExpeditions'

export default function LandingPage() {
  return (
    <div className='landing-page'>
        <HomePageLandingSection/>
        <FestivalSection/>
        <AboutUsSection/>
        <TestimonailSection/>
        <WhyUsSection/>
        <JetExpeditions/>
        <Newsletter/>
        <ScrollVideoSection/>
    </div>
  )
}
