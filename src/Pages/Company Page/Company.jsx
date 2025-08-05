import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/footer'
import { SubpageLayoutCompany } from '../../Components/Subpage Layout/SubpageLayoutCompany'
import { AltText_Company } from '../../Components/Text Section/AltText_Company'
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