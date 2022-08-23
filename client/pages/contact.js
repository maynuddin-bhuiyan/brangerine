import React from 'react';
import ContactForm from '../components/Contact/ContactForm/ContactForm';
import ContactHero from '../components/Contact/ContactHero/ContactHero';
import Footer from '../components/shared/Footer/Footer';
import FooterTwo from '../components/shared/FooterTwo/FooterTwo';
import Navbar from './../components/shared/Navbar/Navbar';

const contact = () => {
    return (
        <div>
            <Navbar/>
            <ContactHero />
            <ContactForm />
            <Footer />
            <FooterTwo/>
        </div>
    );
};

export default contact;