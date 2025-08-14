import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import { SubpageLayoutCompany } from '../../Components/SubpageLayout/SubpageLayoutCompany'
import { AltText_Company } from '../../Components/TextSection/AltText_Company'
import { CTA } from '../../Components/Call to Action/CTA'


export function Company() {
  return (
    <>
    <Navbar></Navbar>
    <SubpageLayoutCompany></SubpageLayoutCompany>
    <AltText_Company></AltText_Company>
    <CTA></CTA>
    <Footer></Footer>
    </>
  )
}