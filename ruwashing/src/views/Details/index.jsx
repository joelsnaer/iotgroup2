import React, { useState, useEffect } from 'react'
import "../../styles/flex.css";
import Header from '../../components/Header'
import Machines from '../../components/Machines'
import Availability from '../../components/Availability';
import Legend from '../../components/Legend'
/*
    --- Details view ---
    This is the main and only view of the website.
    It displays all of the data from the backend so that the user can see it.
*/

const Details = () => {
    /*
        This sends a request to backend to get the server whenever the website loads.
    */
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

    /*
        The general set up or the website.
        It is displayed as a flexbox, we split it up into 4 sections.
        A top horizontal bar to show the dryers,
        a left side vertical bar to show the washers on the website
        and two panels positioned in a row under the top bar and to the right of the left side bar.
    */
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
