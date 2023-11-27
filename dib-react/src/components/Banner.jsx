import { Link } from "react-router-dom";
import banner from "../assets/logo/banner.png";

function Banner() {

    return (
        <header>
            <Link className="link-banner" to="/">
                <img className="banner" src={banner}/>
            </Link>
        </header>
    )
}

export default Banner;