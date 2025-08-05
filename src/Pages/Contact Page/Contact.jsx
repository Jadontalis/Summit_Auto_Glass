import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/footer'
import { GradientContact } from '../../Components/Gradient-BG/GradientContact'
import ContactForm from '../../Components/Contact Form/ContactForm'


export function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

