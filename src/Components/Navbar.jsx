import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Navbar.css';
import cart_icon from '../Assets/cart.png';
import login_signup from '../Assets/login.png';
import { CartContext } from '../Context/CartContext';

const Navbar = () => {
    const [menu, setMenu] = useState("all items");
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    const handleNavigation = (path) => {
        setMenu(path);
        navigate(path);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <p>MedDoor</p>
                </Link>
            </div>
            <ul className="nav-menu">
                <li>
                    <button onClick={() => handleNavigation('/allitems')} className={menu === "all items" ? "active" : ""}>
                        All items
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavigation('/healthcare')} className={menu === "healthcare" ? "active" : ""}>
                        Healthcare
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavigation('/multivitamins')} className={menu === "multivitamins" ? "active" : ""}>
                        Multivitamins
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavigation('/diabetes')} className={menu === "diabetes" ? "active" : ""}>
                        Diabetes
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavigation('/prescription')} className={menu === "upload prescription" ? "active" : ""}>
                        Upload Prescription
                    </button>
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/loginsignup'>
                    <img src={login_signup} alt="LoginSignup" />
                </Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="Cart" />
                    <div className="nav-cart-count">{cartCount}</div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
