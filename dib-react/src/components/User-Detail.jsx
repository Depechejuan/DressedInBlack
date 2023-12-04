import { useEffect, useState } from "react";
import getUser from "../services/get-user";
import Loading from "./Loading";
import Divider from "./Divider";

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
            <div className="users-about" key={user.id}>
            <article className={`user-${u.userName} user-article`} key={u.id}>
                <h4 className="user-name">
                    {u.realName}
                </h4>
                <figure className={`figure-${u.userName} figure-user`}>
                    <img className={`user-photo-${u.userName} user-img`} src={`${host}${u.avatarURL}`} alt={u.realName}></img>
                    <p className={`user-city-age city-${u.userName}`}>{u.city}</p>
                </figure>
                <section className={`user-info-${u.userName} user-section`}>
                    <p className={`user-instruments instruments-${u.userName}`}>
                        {u.instruments.split(',').join(', ')}
                    </p>
                    {u.biography.split('\n').map((line) => (
                        <p key={line.id} className={`user-bio-${u.userName} bio-user`}>{line}</p>
                    ))                
                    }
                    <p className={`user-fav-${u.userName} fav-user`}>Disco Favorito: {u.favAlbum} / Canción Favorita: {u.favSong}</p>
                </section>
            </article>
            <Divider />
            </div>
        ))}
        </>

    )
}
export default UserDetail;