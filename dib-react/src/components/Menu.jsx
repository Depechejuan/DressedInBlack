import {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import getToken from "../services/token/get-token";
import getUserToken from "../services/token/get-user-token";
import deleteToken from "../services/token/delete-token";

function Menu({isMenuOpen}) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = getToken();
        const userToken = getUserToken();

        if (token && userToken) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, []);
    
    const handleLinkClick = () => {
        // closeMenu();
    }

    const handleLogOut = () => {
        deleteToken();  
        setIsLoggedIn(false)
        navigate("/")
    }

    return(
        <nav className={`${isMenuOpen ? "open" : "close"} desktop-navbar`}>
            <ul className="nav-menu">
                <li>
                    <Link to="/" onClick={handleLinkClick}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={handleLinkClick}>Quienes Somos</Link>
                </li>
                <li>
                    <Link to="/tour" onClick={handleLinkClick}>Tour</Link>
                </li>
                <li>
                    <Link to="/video" onClick={handleLinkClick}>Video</Link>
                </li>
                <li>
                    <Link to="/rider" onClick={handleLinkClick}>Rider</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={handleLinkClick}>Contactar</Link>
                </li>
                {isLoggedIn && (
                    <li>
                        <button onClick={handleLogOut}>Logout</button>
                    </li>
            )}
            </ul>
        </nav>
    );
}

export default Menu;