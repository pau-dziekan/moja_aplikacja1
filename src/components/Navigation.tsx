import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss'


function Navigation() {
    return (
        <nav>
        <ul className="clearfix">
            <li>
                <Link to="/slider">Slider</Link>
            </li>
            <li>
                <Link to="/apptodo">App to do</Link>
            </li>
            <li>
                <Link to="/stoper">Stoper</Link>
            </li>
            <li>
                <Link to="/pokemon">Pokemon</Link>
            </li>
        </ul>
        </nav>
        
    );
}

export default Navigation