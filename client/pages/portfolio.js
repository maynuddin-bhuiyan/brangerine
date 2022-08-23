import React from 'react';
import CaseStudiesPage from '../components/CaseStudiesPage/CaseStudiesPage';
import Footer from '../components/shared/Footer/Footer';
import FooterTwo from '../components/shared/FooterTwo/FooterTwo';
import Navbar from '../components/shared/Navbar/Navbar';

const portfolio = () => {
    return (
        <div>
            <Navbar />
            <CaseStudiesPage />
            <Footer />
            <FooterTwo />
        </div>
    );
};

export default portfolio;