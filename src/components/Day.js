import React,{ useState,useEffect } from 'react'
import './Day.css'
import Box from './Box'

function Day() {
    const [sols, setSols] = useState([])
    const [selectedSolIndex,setSelectedSolIndex]=useState(2)
    const [selectedSol,setSelectedSol]=useState({})


    useEffect(() => {
        getWeather().then((sols) => {
            setSols(sols)
            console.log(sols)
            setSelectedSol(sols[selectedSolIndex])
        })
    }, [selectedSol])
    
    console.log(sols)
    console.log(selectedSol)
    const getWeather = () => {
        return  fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
                    .then(res => res.json())
                    .then(data => {
                        const { sol_keys, validity_checks, ...solData } = data
                        // console.log(solData)
                        // console.log(data)
                        return  Object.entries(solData).map(([sol, data]) => {
                                    return {
                                        sol: sol,
                                        maxTemp: data.PRE.av,
                                        season: data.Season,
                                        // minTemp: data.AT.mn,
                                        // windSpeed:data.HWS.av,
                                        dateDay: new  Date(data.First_UTC)
                                    }
                            })
                    })
    }

    
    function displayDate(dateDay) {
        return dateDay.toLocaleDateString(
                undefined,
                {day:'numeric',month:'long'}
            )
    }
    
    return (
        <div className='day'>
            <div className="banner">
                <div className="pane-details">
                    <div className="name">
                        <h1>Sol { selectedSol.sol }</h1>
                        <h3>  {selectedSol &&  displayDate(selectedSol.dateDay) }</h3>
                    </div>
                    <div className="temp">
                        <h2>Temperature</h2>
                        <div className="low">
                            <h4>Low: <span>5&deg;   C</span></h4>
                        </div>
                        <div className="high">
                            <h4>High: <span>10&deg; C</span></h4>
                        </div>
                    </div>
                    <div className="wind">
                        <h2>Wind Speed</h2>
                        <div className="avg">
                            <h4>Average Speed :  <span>10 kph</span></h4>
                        </div>
                        <div className="avg">
                            <h4>Season: <span>{ selectedSol.season } </span>  </h4>
                        </div>
                    </div>
                </div>
                <div className="pane-info">
                    <h3>Latest Weather at Elysium Planitia</h3>
                    <p>
                        Insight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator.
                    </p>
                </div>
            </div>
            <div className="row">
                {sols && sols.map((sol,index) =>  (
                        <Box sol={sol}  key={index} index={index}  setSelectedSolIndex={setSelectedSolIndex} />
                    )
        ) }
            </div>
            </div>
    )
}

export default Day
