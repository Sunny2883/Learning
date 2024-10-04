import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS

function Navbar({ cartCount }) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Shopping Website</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <div className="cart-icon">
                    <Link to="/cart" className="cart-link">
                        🛒
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
