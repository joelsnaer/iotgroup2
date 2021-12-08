import React from 'react'
import Available from '../Available'


const Availability = ({ status }) => {
    return (
        <div>
            <h2>Availability</h2>
            <div className="availability">
                <Available type="WASHING" text={status?.number_washing_free + " Washers"} />
                <Available type="DRYER" text={status?.number_dryer_free + " Dryers"} />
            </div>
        </div>
    )
};

export default Availability;