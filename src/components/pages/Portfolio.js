import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Project from '../project/Project';
import Vent from '../images/Vent.PNG';
import WeatherDash from '../images/WeatherDash.PNG';
import CodeQuiz from '../images/CodeQuiz.PNG';
import Earthquake from '../images/Earthquake.PNG';
import Planner from '../images/Planner.PNG';
import GoogleBooks from '../images/LandingPage.PNG';

class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Project
                            src={Vent}
                            title={"Vent"}
                            description={"Shows users the Air Quality Index of a specified location on a map."}
                            ghhref={"https://github.com/wilbur125/Vent"}
                            dhref={"https://vent-airquality-tracker.herokuapp.com/"}
                        />                 
                    </Col>
                    <Col>
                        <Project
                            src={WeatherDash}
                            title={"Weather Dashboard"}
                            description={"Users can search for city's local weather and 5 day future forecast."}
                            ghhref={"https://github.com/wilbur125/Weather_Dashboard"}
                            dhref={"https://wilbur125.github.io/Weather_Dashboard/"}
                        />   
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Project
                            src={CodeQuiz}
                            title={"Code Quiz"}
                            description={"A quiz to test your coding knowledge."}
                            ghhref={"https://github.com/wilbur125/Code_Quiz"}
                            dhref={"https://wilbur125.github.io/Code_Quiz/"}
                        />                 
                    </Col>
                    <Col>
                        <Project
                            src={Earthquake}
                            title={"Earthquake"}
                            description={"Displays the most recent USGS events and allows users to search for historical data as well."}
                            ghhref={"https://github.com/wilbur125/Earthquake_Tracker"}
                            dhref={"https://kj-labs.github.io/Earthquake_Tracker/"}
                        />   
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Project
                            src={Planner}
                            title={"Planner"}
                            description={"A day planner that is color coded with the current time"}
                            ghhref={"https://github.com/wilbur125/Planner"}
                            dhref={"https://wilbur125.github.io/Planner/"}
                        />                  
                    </Col>
                    <Col>
                        <Project
                            src={GoogleBooks}
                            title={"Google Books Search"}
                            description={"Users can search and save books they found in the Google Books API."}
                            ghhref={"https://github.com/wilbur125/Google_Books_Searchr"}
                            dhref={"https://w125-google-books-search.herokuapp.com/"}
                        />  
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