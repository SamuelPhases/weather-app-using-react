import React from 'react'
import './Box.css'

function Box({ sol,index,setSelectedSolIndex }) {

    function displayDayDate(date) {
        return date.toLocaleDateString(
            undefined,
            {day:'numeric',month:'long'}
        )
    }

    return (
        <div className='box'>
            <div className="id">
                <h3>sol {sol.sol} </h3>
                <h5>{ sol  &&   displayDayDate(sol.dateDay) }</h5>
            </div>
            <div className="temp">
                <h4>Low: <span>0.7&deg; C</span></h4>
                <h4>High: <span>10&deg; C</span></h4>
                <h4>Season: <span>{ sol.season }</span> </h4>
            </div>
            <button onClick={()=>setSelectedSolIndex(index)} >more info</button>
        </div>
    )
}

export default Box
