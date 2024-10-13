import React from 'react';
import './ui-kit/foundation/coloristics/coloristics.css';
import './ui-kit/foundation/typography/typography.css';
import './ui-kit/reset.css';
import './ui-kit/layouts-blocks/herosection/herosection.css';
import './ui-kit/layouts-blocks/header/header.css';
import './ui-kit/layouts-blocks/rating/rating.css';
import HeroSection from './ui-kit/layouts-blocks/herosection/HeroSection';
import Services from './ui-kit/layouts-blocks/services/Services';
import Projects from './ui-kit/layouts-blocks/projects/Projects';
import News from './ui-kit/layouts-blocks/news/News';
import FAQ from './ui-kit/layouts-blocks/faq/FAQ';
import Rating from './ui-kit/layouts-blocks/rating/Rating';
import Blog from './ui-kit/layouts-blocks/blog/Blog';
import Contacts from './ui-kit/layouts-blocks/contacts/Contacts';
import Footer from './ui-kit/layouts-blocks/footer/Footer';
import Header from './ui-kit/layouts-blocks/header/Header';

function App() {
    return (
        <div>
            <Header />
            <HeroSection></HeroSection>
            <Services />
            <Projects />
            <News />
            <FAQ />
            <Rating />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
