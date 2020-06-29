import React from 'react';
import { Header } from '../../components/header';
import { Body } from '../../components/body';
import { BlogSection } from '../../components/blogSection';

import { Container, Row, Col, Card , Button} from 'react-bootstrap';
import { IC_ABOVEFOLD, IC_PARTNER_WITHUS , IC_BLOG_1, IC_BLOG_2, IC_BLOG_3} from '../../images'


import { Footer } from '../../components/footer';
import './HomeScreen.css';


// Shift ALt O   ... to remove unnecessary imports
export class HomeScreen extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Header />
                <Body />
                <BlogSection/>
                <Footer />
            </div>
        );
    }

}

