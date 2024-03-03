"use client";

import { useEffect, useState } from "react";

const Watch = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Format hours, minutes, and seconds to ensure they always have two digits
    const hours = time.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = String(hours % 12 || 12).padStart(2, '0');
    const formattedMinutes = String(time.getMinutes()).padStart(2, '0');
    const formattedSeconds = String(time.getSeconds()).padStart(2, '0');

    return (
        <div>
            {formattedHours}:{formattedMinutes}:{formattedSeconds} {ampm}
        </div>
    )
}

export default Watch;