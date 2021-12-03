import React, { useState, useEffect } from 'react'
import "../../styles/details.css";
import Grid from '../../components/Grid';
import Button from '../../components/Button'

const Details = () => {
    const [washingMachines, setWashingMachines] = useState([])
    const [mapping, setMapping] = useState({});
    const [washerAvailable, setWasherAvailable] = useState(0);
    const [dryerAvailable, setDryerAvailable] = useState(0);
    const [status, setStatus] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (status.machine_status === undefined) {
            fetch("http://localhost:5000/status", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        setStatus(result);
                    },
                    (error) => {
                        setError(error);
                    }
                )
        }
        generateGrid()
        generateMapping()
        generateAvailability()
    }, [status])

    const generateGrid = () => {
        setWashingMachines([])
        for (let i = 0; i < 7; i++) {
            setWashingMachines(washingMachines => [...washingMachines, [[""], [""], [""], [""], [""], [""], [""], [""], [""]]])
        }
    }

    const generateMapping = () => {
        setMapping({
            ...mapping,
            '6 0': 0, '5 0': 1, '4 0': 2, '3 0': 3, '2 0': 4, '1 0': 5, '6 1': 6,
            '5 1': 7, '4 1': 8, '3 1': 9, '2 1': 10, '1 1': 11, '0 2': 12,
            '0 3': 13, '0 4': 14, '0 5': 15, '0 6': 16, '0 7': 17, '0 8': 18
        });
    }

    const generateAvailability = () => {
        let washerCounter = 0;
        let dryerCounter = 0;
        if (status.machine_status !== undefined) {
            for (let i = 0; i < 19; i++) {
                if (status.machine_status[i].ison == "OFF")
                    if (status.machine_status[i].type == "DRYER")
                        dryerCounter++;
                    else
                        washerCounter++;
            }
            setDryerAvailable(dryerCounter);
            setWasherAvailable(washerCounter);
        }
    }

    return (
        <div className='details'>
            <h1>R U Washing?</h1>
            <div>
                <div className="right">
                    <div>
                        <span>Washing: {washerAvailable} available</span>
                    </div>
                    <div>
                        <span>Dryers: {dryerAvailable} available</span>
                    </div>
                </div>
                <div className="left">
                    <div>
                        <span>Green: Available</span>
                    </div>
                    <div>
                        <span>Red: Unavailable</span>
                    </div>
                    <div>
                        <span>Gray: Unknown</span>
                    </div>
                </div>
                
            </div>
            <Grid washingMachines={washingMachines} map={mapping} status={status}></Grid>
        </div>
    )
}

export default Details