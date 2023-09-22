import { useState } from "react";


function Dates({date}) {
    const [showFullDate, setShowFullDate] = useState(false);

    const formatDate = (dateString) => {
        const postDate = new Date(dateString);
        const now = new Date();

        const timeDiffInMinutes = Math.floor((now - postDate) / (1000*60));
        const timeDiffInHours = Math.floor(timeDiffInMinutes / 60);
        const timeDiffInDays = Math.floor(timeDiffInHours / 24);

        if (timeDiffInMinutes < 5) {
            return 'hace un momento';
        } else if (timeDiffInMinutes < 60) {
            return `hace ${timeDiffInMinutes} ${timeDiffInMinutes === 1 ? 'minuto' : 'minutos'}`;
        } else if (timeDiffInHours < 24) {
            return `hace ${timeDiffInHours} ${timeDiffInHours === 1 ? 'hora' : 'horas'}`;
        } else if (timeDiffInDays < 5) {
            return `hace ${timeDiffInDays} ${timeDiffInDays === 1 ? 'día' : 'días'}`;
        } else {
            return postDate.toLocaleDateString('es-ES');
        }
    }
    
    const formattedDate = formatDate(date);
    const fullDate = new Date(date).toLocaleString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    })
    
    const handleMouseEnter = () => {
        setShowFullDate(true);
    };
    const handleMouseLeave = () => {
        setShowFullDate(false);
    };

    return (
        <p
        className="post-date"
        title={showFullDate ? fullDate : null}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            {formattedDate}
        </p>
    )
}

export default Dates;