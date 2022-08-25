import React from 'react';
import AedikClothingHero from '../components/BlogDetails/CaseStudiesDetails/AedikClothing/AedikClothingHero';
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const csAedikclothing = () => {
    return (
        <div>
            <Navbar />
            <AedikClothingHero/>
            <Footer />
        </div>
    );
};

export default csAedikclothing;