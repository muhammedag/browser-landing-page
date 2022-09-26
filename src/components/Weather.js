import React from 'react';

const Weather = ({temp, city, date}) => {
    return (
        <div className="weather">
            <div className="temp">{temp}&#176;</div>
            <div className="right">
                <div className="city">{city}</div>
                <div className="date">{date}</div>
            </div>
        </div>
    );
}

export default Weather;
