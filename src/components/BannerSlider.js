import React, { useState, useEffect } from 'react';
import "../App.css"

const BannerSlider = ({ data }) => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {

            setCurrentBannerIndex((prevIndex) =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [data]);

    const handlePrevBanner = () => {
        setCurrentBannerIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    const handleNextBanner = () => {
        setCurrentBannerIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="banner-slider">
            <button onClick={handlePrevBanner}>Previous</button>
            <div className="banner">
                <img src={data[currentBannerIndex].image} alt={data[currentBannerIndex].text} />
                <h2>{data[currentBannerIndex].text}</h2>
            </div>
            <button onClick={handleNextBanner}>Next</button>
        </div>
    );
};

export default BannerSlider;
