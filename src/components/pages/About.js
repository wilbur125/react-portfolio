import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Profile from '../profile/Profile';
import AboutMe from '../aboutme/AboutMe';

import "../style/style.css";


class About extends Component {
    render() {
        return (
            <Container class="container">
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Profile/>                 
                    </Col>
                    <Col sm={8}>
                        <AboutMe/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer/>
                    </Col>
                </Row>
            </Container>


        )
    }
}

export default About;