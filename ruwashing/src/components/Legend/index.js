import React from 'react'
import LegendItem from '../LegendItem'
/*
    --- Legend component ---
    Creates the panel for the legend.
    Calls the LegendItem component for the panel
*/

const Legend = () => {

    return (
        <div>
            {/* <h1>Legend</h1> */}
            <div className="legend">
                <LegendItem type="green" text={"Available"}  />
                <LegendItem type="red" text={"Unavailable"} />
                <LegendItem type="gray" text={"Unknown"} />
            </div>
        </div>

    )
};

export default Legend;