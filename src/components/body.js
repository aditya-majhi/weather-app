import React, { useEffect, useState } from 'react'
import Card from './card';

const Body = (props) => {
    const [input, setInput] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const [hr , setHr] = useState() ;

    useEffect(() => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=5af40147438b3b9b3f336321ecbc9adb`
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            const { temp , humidity , pressure , feels_like } = data.main;
            const { country } = data.sys;
            const { main: mood } = data.weather[0];
            const { speed: windSpeed } = data.wind;
            const {name} = data ;

            const cel = Math.round(temp/10) ;
            const feel = Math.round(feels_like/10) ; 
            setHr(new Date().getHours() + 1) ;
            const hour = new Date().getHours() + 1 ;

            const currData = {
                cel , humidity, pressure, country, mood, windSpeed , name , feel , hour 
            }

            setWeatherData(currData);
        })
    } , [])

    const handleClick = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=5af40147438b3b9b3f336321ecbc9adb`
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            const { temp , humidity , pressure , feels_like } = data.main;
            const { country } = data.sys;
            const { main: mood } = data.weather[0];
            const { speed: windSpeed } = data.wind;
            const {name} = data ;

            const cel = Math.round(temp/10) ;
            const feel = Math.round(feels_like/10) ; 
            setHr(new Date().getHours() + 1) ;
            const hour = new Date().getHours() + 1 ;

            const currData = {
                cel , humidity, pressure, country, mood, windSpeed , name , feel , hour 
            }

            setWeatherData(currData);

            props.func(hr) ;
        })
    }

    return (
        <div className='flex flex-col items-center justify-center space-y-6 md:space-y-14'>
            <div className='search flex items-center space-x-2 bg-white pr-1 border rounded-full'>
                <input placeholder='Search...' className='p-2 border border-none outline-none rounded-full font-bold placeholder-gray-600' value={input} onChange={(event) => { setInput(event.target.value) }} />
                <i className={`fa-solid fa-magnifying-glass px-4 py-2 border rounded-full ${(hr < 6 || hr > 18) ? "bg-[#301934]" : "bg-orange-400"} ${(hr < 6 || hr > 18) ? "text-white" : "text-black"}`} onClick={handleClick}></i>
            </div>
            <Card weatherData={weatherData} />
        </div>
    )
}

export default Body
