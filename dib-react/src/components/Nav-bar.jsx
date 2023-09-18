import menuIcon from "../assets/svg/menu-morado.svg"
import { useState } from "react"
import Menu from "./Menu";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return(
        <>
            <nav className="mobile-navbar">
                <img onClick={handleMenuClick} className="menu-icon" src={menuIcon} alt="Menu"/>
                <Menu isMenuOpen={isMenuOpen} />
            </nav>
        </>
    )
}

export default NavBar;