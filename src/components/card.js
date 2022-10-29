import React, { useEffect, useState } from 'react'

const Card = ({ weatherData }) => {

    const [icon, setIcon] = useState("");
    const [currDate , setCurrDate] = useState("") ;

    const {
        cel, humidity, pressure, country, mood, windSpeed, name, feel, hour
    } = weatherData;

    useEffect(() => {

        const date = new Date() ;
        const datestr = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() ;
        setCurrDate(datestr) ;

        if(mood === "Clear" && (hour > 6 && hour < 18)){
            setIcon("wi-day-sunny") ;
        }
        if(mood === "Haze" && (hour > 6 && hour < 18)){
            setIcon("wi-day-haze") ;
        }
        if(mood === "Cloudy" && (hour > 6 && hour < 18)){
            setIcon("wi-day-cloudy") ;
        }
        if(mood === "Fog" && (hour > 6 && hour < 18)){
            setIcon("wi-day-fog") ;
        }
        if(mood === "Clear" && (hour < 6 || hour > 18)){
            setIcon("wi-night-clear") ;
        }
        if(mood === "Haze" && (hour < 6 || hour > 18)){
            setIcon("wi-windy") ;
        }
        if(mood === "Smoke" && (hour < 6 || hour > 18)){
            setIcon("wi-night-fog") ;
        }
    }, [mood , hour])

    return (
        <div className='flex flex-col w-4/5 justify-center m-auto backdrop-blur-lg p-5 border rounded-2xl border-gray-50'>
            <div className='data text-white space-y-2'>
                <div className='flex space-x-3 items-center justify-around'>
                    <i className={`wi ${icon} text-white text-4xl`} />
                    <div>
                        <h4 className='font-semibold'>{name} , {country}</h4>
                        <h4 className='font-light'>{currDate}</h4>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center space-y-1'>
                    <div className='flex items-center justify-center space-x-1'>
                        <h2 className='text-4xl font-semibold'>{cel}</h2>
                        <i className='wi wi-celsius text-4xl'></i>
                    </div>
                    <h3>{mood}</h3>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex space-x-2 items-center justify-between'>
                            <i className='wi wi-barometer text-lg text-amber-600'></i>
                            <h4>{pressure}</h4>
                        </div>
                        <div className='flex space-x-1 items-center justify-between'>
                            <i className='wi wi-humidity text-lg text-sky-600'></i>
                            <h4>{humidity}</h4>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex space-x-2 items-center justify-between'>
                            <i className='wi wi-strong-wind text-lg text-blue-700'></i>
                            <h4>{windSpeed}</h4>
                        </div>
                        <div className='flex space-x-1 items-center justify-between'>
                            <i className='wi wi-thermometer text-lg text-red-600'></i>
                            <h4>{feel}°</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
