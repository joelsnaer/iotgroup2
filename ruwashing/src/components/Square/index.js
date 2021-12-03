import React, { useState, useEffect } from 'react'
import gray from '../../images/gray.png'
import transparent from '../../images/transparent.png'
import red from '../../images/red.png'
import green from '../../images/green.png'

const Square = ({ rIndex, cIndex, blank, map, status }) => {
    const [color, setColor] = useState(gray);
    useEffect(() => {
        if (status === "ON") {
            setColor(red);
        }
        else if (status === "OFF") {
            setColor(green);
        }
    }, [])

    
    return (!blank ?
        <img className="washer" src={color} alt="Available" />
        :
        <img className="washer" src={transparent} alt="Blank" />);
};

export default Square;