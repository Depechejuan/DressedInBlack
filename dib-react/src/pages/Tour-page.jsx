import { Link } from "react-router-dom";
import CreateBtn from "../components/Create-btn";
import Tour from "../components/Tour";


function TourPage() {
    return (
        <>
            <Link to="/dibtour">
                <CreateBtn method={'Tour'} />
            </Link>
            <Tour />
        </>
    )
}

export default TourPage;