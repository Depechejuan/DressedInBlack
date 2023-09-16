import { useEffect, useState } from "react";
import getUser from "../services/get-user";
import Loading from "./Loading";


const host = import.meta.env.VITE_API_HOST;

function UserDetail() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const data = await getUser();
                setUser(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchUser();
    }, [])


    if (user === null) {
        return <Loading />
    }

    return(
        <>
        {user.data.map(u => (
            <article className={`user-${u.userName}`} key={user.toShow}>
                <h2>
                    {u.realName}
                </h2>

                <p className="instruments">
                    {u.instruments.split(',').join(', ')}
                </p>
                <figure>
                    <img src={`${host}${u.avatarURL}`}></img>
                </figure>
                <>
                </>
                <>
                </>
            </article>
        ))}
        </>
    )
}
export default UserDetail;