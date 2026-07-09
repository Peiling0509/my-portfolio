import { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.css'; 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Closes the menu when a link is clicked on mobile
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <h2 className="logo">
                <Link to="/" onClick={closeMenu}>Pei Ling's Portfolio</Link>
            </h2>

            {/* Hamburger Icon for Mobile */}
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={closeMenu}>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;