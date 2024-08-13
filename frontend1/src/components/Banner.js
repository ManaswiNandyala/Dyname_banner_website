import React, { useEffect, useState } from 'react';
import { getBanner } from './bannerApi'; // Updated import

const Banner = () => {
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const data = await getBanner();
                setBanner(data);
            } catch (error) {
                console.error('Error fetching banner:', error);
            }
        };

        fetchBanner();
    }, []);

    if (!banner) return <div>Loading...</div>;

    return (
        <div style={{ display: banner.visibility ? 'block' : 'none' }}>
            <h1>{banner.description}</h1>
            <p>Time remaining: {banner.timer} seconds</p>
            <a href={banner.link}>Learn more</a>
        </div>
    );
};

export default Banner;
