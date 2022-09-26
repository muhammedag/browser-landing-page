import { useEffect, useState } from "react";
import InfoPanel from "./components/InfoPanel";
import MainBackground from "./components/MainBackground";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

function App() {
    async function get_city() {
        let ip = await fetch("https://api.ipify.org/?format=json");
        ip = await ip.json();
        ip = ip.ip;
        let city = await fetch("http://ip-api.com/json/" + ip + "?fields=city");
        city = await city.json();
        city = city.city;
        return city;
    }

    async function get_weather_data() {
        let city = await get_city();
        let raw_data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + process.env.REACT_APP_API_KEY);
        let weather = await raw_data.json();
        return weather;
    }

    function to_date(unix_timestamp) {
        let date = new Date(unix_timestamp);
        let years = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();

        return years + "/" + month + "/" + day + " " + hours + ':' + minutes.substr(-2);
    }

    const [weather, setWeather] = useState(0);
    const [background, setBg] = useState(0);

    useEffect(() => {

        if (weather == 0) {
            get_weather_data().then(res => {
                setWeather(res);
            })
        }

        if (weather != 0) {
            let bg = "";
            switch (weather.weather[0].icon) {
                case "01d":
                    bg = 1; // open air
                    break;
                case "02d":
                    bg = 2; // partly cloudy
                    break;
                case "09d":
                    bg = 3; // partly cloudy
                    break;
                case "13d":
                    bg = 3; // partly cloudy
                    break;
                case "09d":
                    bg = 4; // partly cloudy
                    break;
                default:
                    bg = 1;
                    break;
            }
            setBg(bg);
        }

    }, [weather]);

    return (
        <>
            <MainBackground weather={background} />

            <div className="container">
                <SearchBar />
            </div>

            <Weather temp={weather != 0 ? weather.main.temp.toString().slice(0, -3) : ""} city={weather != 0 ? weather.name : ""} date={weather != 0 ? to_date(Date.now()) : ""} />
        </>
    );
}

export default App;