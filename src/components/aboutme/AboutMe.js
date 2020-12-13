import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <p>My name is Matt Wilbur. I am a Full-Stack Developer based in Seattle, WA. I am currently seeking a role as a Front-End Developer. As a recent graduate of the University of Washington Coding Bootcamp, I have a newly learned set of skills that can be applied to create solutions using HTML, CSS, Javascript, SQL, JSX, and React; just to name a few. I enjoy working with others to create solutions that are accessible and user-friendly. In my previous experience as a Food Scientist and Food Safety Professional, I have adopted a philosophy to ensure that the solutions we develop for our everyday problems have a concise and understandable objective. I look forward to applying that same philosophy to my future career as a Front-End Developer.</p>
                
                <p>Click the following links to go to my {" "}
                <a href="https://github.com/wilbur125">GitHub</a> {" "}
                and {" "}
                <a href="https://www.linkedin.com/in/matthew-wilbur/">LinkedIn</a> {" "}
                pages
                </p>
            </div>
            )
    }
}
export default AboutMe;