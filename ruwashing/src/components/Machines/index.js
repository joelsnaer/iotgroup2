import React from 'react'
import Machine from '../../components/Machine'

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