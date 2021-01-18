import React from 'react'
import './Display.css'


function Display() {
    return (
        <div className='display'>
            <h3>Weather <span> Info</span></h3>
            <div className="details">
                    <div className="icon"></div>
                <h2>08&deg;<sup>C</sup></h2>
                <p className="time">
                    December 7, 2020</p>
                <div className="cond">
                    <div className="cloudy">
                        <p>cloudy</p>
                    </div>
                    <div className="rain">
                        <p>rain -  30%</p>
                    </div>
                </div>
                <div className="place">
                    <h3>London</h3>
                </div>
            </div>
        </div>
    )
}

export default Display
