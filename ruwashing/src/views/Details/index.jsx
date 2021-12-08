import React, { useState, useEffect } from 'react'
import "../../styles/flex.css";
import Header from '../../components/Header'
import Machines from '../../components/Machines'
import Availability from '../../components/Availability';
import Legend from '../../components/Legend'

const Details = () => {
    const [status, setStatus] = useState([]);
    useEffect(() => {
        if (status.machine_status === undefined) {
            fetch("/api/status")
                .then(res => res.json())
                .then(
                    (result) => {
                        setStatus(result);
                    }
                )
        }
    }, [status])

    return (
        <div>
        <Header />
            <div className="wrapper">
                <div className="dryers">
                    <Machines status={status} type={'DRYER'}/>
                </div>
                <div className="container">
                    <div className="washers">
                        <Machines status={status} type={'WASHING'} />
                    </div>
                    <div className="information">
                        <div className="panel p-1">
                            <Availability status={status}/>
                        </div>
                        <div className="panel p-2">
                            <Legend/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
