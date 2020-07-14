import React from 'react';
import { Header } from '../../components/header';
import { Body } from '../../components/body';
import { SectionOne } from '../../components/sectionOne';
import { SectionThree } from '../../components/sectionThree';
import { SectionFour } from '../../components/sectionFour';

import { SectionFive } from '../../components/sectionFive';
import { BlogSection } from '../../components/blogSection';

import { FindYourAnswer } from '../../components/findYourAnswer';
import { PrivacyPolicy } from '../../components/privacyPolicy';

import { Footer } from '../../components/footer';
import './HomeScreen.css';


// Shift ALt O   ... to remove unnecessary imports
export class HomeScreen extends React.Component {
    render() {
        return (
            <div className="main-container">
                {/* <Header /> */}
                <SectionOne />
                <Body />
                <SectionThree/>
                <SectionFour />
                <SectionFive />
                <BlogSection />
                <Footer />

                
                
                {/* <FindYourAnswer />

                <PrivacyPolicy /> */}
            </div>
        );
    }

}

