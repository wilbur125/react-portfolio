import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import "../style/style.css";

class Header extends Component {
    render() {
        return(
            <header class="header">
                <h1>Matt Wilbur</h1>
                <Navbar/>
            </header>
        )
    }
}
export default Header;