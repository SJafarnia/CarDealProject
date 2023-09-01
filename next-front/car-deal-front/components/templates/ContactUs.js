import React from 'react'
import Navbar from '../layout/nav/Navbar'
import ContactUsComponent from '../modules/contanct/ContactUsComponent'

function ContactUs() {
    return (
        <>
            <Navbar main="false" />
            <ContactUsComponent />
        </>
    )
}

export default ContactUs