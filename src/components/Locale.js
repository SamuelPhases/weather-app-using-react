import React,{ useState,useEffect } from 'react'
import Display from './Display'
import './Locale.css'

function Locale() {
    const [location, setLocation] = useState('')
    const [details,setDetails]=useState({})
    
    useEffect(() => {
        // return () => {
            //     cleanup
            // }
            
            // fetchWeather()
        }, [location])
        
    //     const fetchWeather = (e) => {
    //         e.preventDefault()
    //         console.log(location)
    //         console.log(details)
    // }
    function onSubmitInput(e) {
        e.preventDefault()
        console.log(location)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5acfdc55d1734937d8cf4c65630a2a97`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
                console.log(details)
            })
    }

        return (
        <div className='locale'>
            <Display details={details} />
            <div className="side">
                <div className="side-header">
                    <form action="" onSubmit={onSubmitInput} >
                        <input type="search" name="" id=""  placeholder='Another location' onChange={(e)=>{setLocation(e.target.value)}} />
                        <button type="submit">search</button>
                    </form>
                    <div className="deg">
                        <div>
                            <h5>&deg;C</h5>
                        </div>
                        <div>
                            <h5>&deg;F</h5>
                        </div>
                    </div>
                    <div className="toggle">
                        <input type="checkbox" name="" id="toggle"/>
                        <label htmlFor="toggle">Dark mode</label>
                    </div>
                </div>
                <div className="weather-details">
                        <h3>Today's highlights</h3>
                        {details ? (
                        <div className="grid-details">    
                            <div>
                                <h4>sunrise & sunset</h4>
                                <div>
                                    <div className="time"><h4>{details.sys.sunrise} <span>pm</span></h4></div>
                                    <div className="time"><h4>{details.sys.sunset} <span>pm</span></h4></div>
                                </div>
                                <h5>Time</h5>
                            </div>
                            <div>
                                <h4>
                                    humidity
                                </h4>
                                <p>{details.main.humidity}%</p>
                                <h5>normal</h5>
                            </div>
                            <div>
                                <h4>visibility</h4>
                                {/* <p>{details.visibility} <span>km</span></p> */}
                                <h5>average</h5>
                            </div>
                            <div>
                                <h4>air quality</h4>
                                {/* <p>{ details.main.pressure }</p> */}
                                <h5>unhealthy</h5>
                            </div>
                            <div>
                                <h4>cloudy</h4>
                                {/* <p>{ details.clouds.all }%</p> */}
                                <h5>unhealthy</h5>
                            </div>
                            <div>
                                <h4>wind Speed</h4>
                                {/* <p>{details.wind.speed} km/h</p> */}
                                <h5>WSW</h5>
                            </div>
                        </div>
                        ) : ('null')}
                </div>
            </div>
        </div>
    )
}

export default Locale
