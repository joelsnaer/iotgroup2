import Square from '../Square';

const Grid = ({ washingMachines, map, status }) => (
    <div className="grid">
        {status.machine_status !== undefined &&
            washingMachines.map((squares, rIndex) => {
            return (
                <div className="row" key={rIndex}>
                    {squares.map((symbol, cIndex) => {
                        return ( (rIndex + ' ' + cIndex in map) ?
                            (
                                <Square key={cIndex} rIndex={rIndex} cIndex={cIndex} blank={false} status={status.machine_status[map[rIndex + ' ' + cIndex]]?.ison}></Square>
                            )
                            :
                            <Square key={cIndex} rIndex={rIndex} cIndex={cIndex} blank={true}></Square>)
                    })}
                </div>
            )
        })}
    </div>
);

export default Grid;
