import React, { useState, useEffect } from 'react'
import washer from '../../images/washers/washer.png'
import dryer from '../../images/dryers/dryer.png'
/*
    --- Available component ---
    Takes in the type of a machine and some text as parameters.
    Generates an image of the machine type and adds the text below it as a caption
    Similar to the LegendItem component
*/

const Available = ({ type, text }) => {
    const [machine, setMachine] = useState(washer);
    useEffect(() => {
        if (type === "WASHING") {
            setMachine(washer)
        }
        else if (type === "DRYER") {
            setMachine(dryer)
        }
    }, [])

    return (
        <div className="available">
            <img className="machine availabilityMachine" src={machine} alt="Machine" />
            <p className="availabilityText">{text}</p>
        </div>
       
    )
};

export default Available;