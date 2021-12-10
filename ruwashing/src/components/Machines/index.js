import React from 'react'
import Machine from '../../components/Machine'
/*
    --- Machines component ---
    Takes in the data from the server and which type of machine it should display.
    Calls the machine component to generate the rows of the machines.
    For example if you send in dryer you return images for all the dryers in the server data.
*/

const Machines = ({ status, type }) => {
    return (
        status.machine_status !== undefined &&
        Object.keys(status.machine_status).map((washingmachine) => {
            if (status.machine_status[washingmachine].type === type) {
                return <Machine key={washingmachine} status={status.machine_status[washingmachine].ison}
                    type={status.machine_status[washingmachine].type} />
            }
        })
    )
};

export default Machines;