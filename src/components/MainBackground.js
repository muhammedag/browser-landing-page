import React, { useState, useEffect } from 'react';

const MainBackground = ({ weather }) => {

    const [WeatherBG, setBG] = useState();

    useEffect(() => {
        switch (weather) {
            case 1:
                setBG("/img/open-air.jpg");
                break;
            case 2:
                setBG("/img/partly-cloudy.jpg");
                break;
            case 3:
                setBG("/img/rain.jpg");
                break;
            case 4:
                setBG("/img/snow.jpg");
                break;
            case 5:
                setBG("/img/windy.jpg");
                break;
            default:
                setBG("/img/open-air.jpg");
                break;
        }
    }, []);

    return (
        <main className="background">
            <img src={WeatherBG} />
        </main>
    );
}

export default MainBackground;
