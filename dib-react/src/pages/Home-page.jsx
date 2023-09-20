    import { Link } from "react-router-dom";
import CreateBtn from "../components/Create-btn";
    import PostList from "../components/Post-list";
    import getToken from "../services/token/get-token";


    function HomePage() {
        const token = getToken();
        const method = 'Post';

        return(
            <>
                <h1>Dressed In Black</h1>
                <h2>Tributo a Depeche Mode</h2>
                {token && <Link to="/dibposts"><CreateBtn method={method} /></Link>}
                <PostList />
            </>
        )
    }

    export default HomePage;