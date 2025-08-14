import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import { GradientContact } from '../../Components/GradientBG/GradientContact'
import ContactForm from '../../Components/ContactForm/ContactForm'


export function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

