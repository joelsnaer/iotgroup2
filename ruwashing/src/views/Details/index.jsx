import React, { useState, useEffect } from 'react'
import red from '../../images/red.png'
import green from '../../images/green.png'

import "../../styles/details.css";
import Grid from '../../components/Grid';
import Button from '../../components/Button';
import { getStatus } from '../../actions/machineActions'

const Details = () => {
    // const [washingMachines, setWashingMachines] = useState([false, true, false, true, true, false])
    const [washingMachines, setWashingMachines] = useState([])
    const [mapping, setMapping] = useState({});
    const [status, setStatus] = useState([]);

    useEffect(() => {
        fetch("127.0.0.1:5000/status")
            .then(res => res.json())
            .then(
                (result) => {
                    setStatus(result);
                }
            )
        generateGrid()
        // setStatus(getStatus());
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

    const generateMapping = () => {
        setMapping({
            ...mapping,
            0: [6, 0], 1: [5, 0], 2: [4, 0], 3: [3, 0], 4: [2, 0], 5: [1, 0], 6: [6, 1],
            7: [5, 1], 8: [4, 1], 9: [3, 1], 10: [2, 1], 11: [1, 1], 12: [0, 2],
            13: [0, 3], 14: [0, 4], 15: [0, 5], 16: [0, 6], 17: [0, 7], 18: [0,8]
        });
    }

    const test = () => {
        console.log(status);
    }

    return (
        <div className='details'>
            {/* {availability} */}
            <Grid washingMachines={washingMachines}></Grid>
            <Button onClick={test}>test</Button>
        </div>
    )
}

export default Details