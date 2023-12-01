import menuIcon from "../assets/svg/menu-morado.svg"
import { useState } from "react"
import Menu from "./Menu";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }


    return (
        <nav className="mobile-navbar">
            <input
                type="image"
                src={menuIcon}
                alt="Menu"
                className="menu-icon"
                onClick={handleMenuClick}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === 'Space') {
                    handleMenuClick();
                    }
                }}
            />
            <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </nav>
        );
}

export default NavBar;