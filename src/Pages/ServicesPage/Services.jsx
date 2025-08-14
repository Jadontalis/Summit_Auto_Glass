import React from 'react'
import './Services.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import { SubpageLayout } from '../../Components/SubpageLayout/SubpageLayout'
import { AltText_Services } from '../../Components/TextSection/AltText_Services'
import { CTA } from '../../Components/CallToAction/CTA'

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