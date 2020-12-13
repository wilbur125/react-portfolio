import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

        return (
            <div>
                <div>
                    <Link to='/'>About Me</Link>
                </div>        
                <div>
                    <Link to='/portfolio'>Portfolio</Link>
                </div>
            </div>

        )
    
}

export default Navbar;