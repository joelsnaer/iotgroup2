import React, { useState, useEffect } from 'react'
import washer from '../../images/washers/washer.png'
import grayWasher from '../../images/washers/grayWasher.png'
import redWasher from '../../images/washers/redWasher.png'
import greenWasher from '../../images/washers/greenWasher.png'
/*
    --- LegendItem component ---
    Takes in type of machine and text as parameters
    Generates a machine of the correct color and adds text below it
    This is how we can show what which color means what
    Similar to the LegendItem component
*/

const LegendItem = ({ type, text }) => {
    const [machine, setMachine] = useState(washer);
    useEffect(() => {
        if (type === "green") {
            setMachine(greenWasher)
        }
        else if (type === "gray") {
            setMachine(grayWasher)
        }
        else if (type === "red") {
            setMachine(redWasher)
        }
    }, [])

    return (
        <div className="legendItem">
            <img className="machine legendMachine" src={machine} alt="Machine" />
            <p className={type}>{text}</p>
        </div>

    )
};

export default LegendItem;