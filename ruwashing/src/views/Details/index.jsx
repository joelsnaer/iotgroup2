import React, { useState, useEffect } from 'react'
import red from '../../images/red.png'
import green from '../../images/green.png'

import "../../styles/details.css";
import Grid from '../../components/Grid';
import Button from '../../components/Button';

const Details = () => {
    // const [washingMachines, setWashingMachines] = useState([false, true, false, true, true, false])
    const [washingMachines, setWashingMachines] = useState([])

    useEffect(() => {
        generateGrid()
    }, [])

    // const availability = washingMachines.map((value) => {
    //     return value ?
    //         <img className="washer" src={green} alt="Available" />
    //         :
    //         <img className="washer" src={red} alt="Not Available" />
    //     }
    // );

    const generateGrid = () => {
        setWashingMachines([])
        for (let i = 0; i < 7; i++) {
            setWashingMachines(washingMachines => [...washingMachines, [[""], [""], [""], [""], [""], [""], [""], [""], [""]]])
        }
    }

    return (
        <div className='details'>
            {/* {availability} */}
            <Grid washingMachines={washingMachines}></Grid>
        </div>
    )
}

export default Details