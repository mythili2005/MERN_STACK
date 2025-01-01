import '../../assets/css/NavBar.css'
import React from 'react';
import {Link} from 'react-router-dom'
const NavBar = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/About">About</Link></li>
                    <li><Link to = "/Gallery">Gallery</Link></li>
                    <li><Link to = "/Contact">Contact</Link></li>
                    <li><Link to = "/use-effect">useEffect</Link></li>
                    <li><Link to = "/use-ref">useRef</Link></li>
                    <li><Link to = "/use-context">useContext</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBar;