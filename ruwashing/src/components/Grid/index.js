import Square from '../Square';

const Grid = ({ washingMachines }) => (
    <div className="grid">
        {washingMachines.map((squares, rIndex) => {
            return (
                <div className="row" key={rIndex}>
                    {squares.map((symbol, cIndex) => {
                        return <Square key={cIndex} rIndex={rIndex} cIndex={cIndex} ></Square>
                    })}
                </div>
            )
        })}
    </div>
);

export default Grid;
