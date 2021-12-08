import React, { useState, useEffect } from 'react'
import grayWasher from '../../images/washers/grayWasher.png'
import redWasher from '../../images/washers/redWasher.png'
import greenWasher from '../../images/washers/greenWasher.png'
import grayDryer from '../../images/dryers/grayDryer.png'
import redDryer from '../../images/dryers/redDryer.png'
import greenDryer from '../../images/dryers/greenDryer.png'

const Machine = ({ status, type }) => {
    const [color, setColor] = useState(grayWasher);
    const [machineType, setMachineType] = useState("machine");
    useEffect(() => {
        if (type === "WASHING") {
            setMachineType("machine washer");
            setColor(grayWasher);
            if (status === "ON") {
                setColor(redWasher);
            }
            else if (status === "OFF") {
                setColor(greenWasher);
            }
        }
        else if (type === "DRYER") {
            setMachineType("machine dryer");
            setColor(grayDryer);
            if (status === "ON") {
                setColor(redDryer);
            }
            else if (status === "OFF") {
                setColor(greenDryer);
            }
        }
    }, [])

    return <img className={machineType} src={color} alt="Machine" />;
};

export default Machine;