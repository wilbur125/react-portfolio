import React, { Component } from 'react';
import Navbar from '..navbar/Navbar';

class Header extends Component {
    render() {
        return(
            <header>
                <h1>Matt Wilbur</h1>
                <Navbar/>
            </header>
        )
    }
}
export default Header;