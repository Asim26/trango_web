import React from 'react';
import { Header } from '../../components/header';
import { Body } from '../../components/body';
import { SectionFour } from '../../components/sectionFour';

import { SectionFive } from '../../components/sectionFive';
import { BlogSection } from '../../components/blogSection';


import { Footer } from '../../components/footer';
import './HomeScreen.css';


// Shift ALt O   ... to remove unnecessary imports
export class HomeScreen extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Header />
                <Body />
                <SectionFour />
                <SectionFive />
                <BlogSection />
                <Footer />
            </div>
        );
    }

}

