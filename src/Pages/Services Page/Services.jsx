import React from 'react'
import './Services.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/footer'
import { SubpageLayout } from '../../Components/Subpage Layout/SubpageLayout'
import { AltText_Services } from '../../Components/Text Section/AltText_Services'
import { CTA } from '../../Components/Call to Action/CTA'

export function Services() {
  return (
    <>
    <Navbar></Navbar>
    <SubpageLayout></SubpageLayout>
    <AltText_Services></AltText_Services>
    <CTA></CTA>
    <Footer></Footer>
    </>
  )
}