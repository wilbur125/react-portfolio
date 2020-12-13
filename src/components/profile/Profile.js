import React, { Component } from 'react';
import Headshot from '../images/profile.jpg';

class Profile extends Component {
    render() {
        return (
            <img src={Headshot} alt='Matt Wilbur'/> 
        )
    }
}

export default Profile;