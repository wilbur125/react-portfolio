import { Component } from 'react';
import { Link } from 'react-dom-router';

class Navbar extends Component {
    render() {
        return (
            <span>        
                <Link to='/Home'>Home</Link>
                <Link to='/Portfolio'>Portfolio</Link>
            </span>

        )
    }
}

export default Navbar;