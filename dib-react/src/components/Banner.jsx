import { Link } from "react-router-dom";
import banner from "../assets/logo/banner.png";

function Banner() {

    return (
            <Link className="link-banner" to="/">
                <img className="banner" src={banner}/>
            </Link>
    )
}

export default Banner;