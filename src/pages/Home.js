import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main className="bg-site bg-no-repeat bg-cover overflow-hidden">
            <Header />
            <Nav />
            <About />
            <Services />
            <Work />
            <Contact />
            <Footer />
        </main>
    );
};

export default Home;
