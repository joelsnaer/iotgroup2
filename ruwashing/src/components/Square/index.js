import black from '../../images/black.png'
import transparent from '../../images/transparent.png'
import red from '../../images/red.png'
import green from '../../images/green.png'

const Square = ({ rIndex, cIndex }) => {
    let rowsToFill = [0]
    let columnsToFill = [0, 1]
    let value = false;
    if (rowsToFill.includes(rIndex) || columnsToFill.includes(cIndex))
        value = true;
    if (rowsToFill.includes(rIndex) && columnsToFill.includes(cIndex))
        value = false;


    return (value ?
        <img className="washer" src={black} alt="Available" />
        :
        <img className="washer" src={transparent} alt="Not Available" />);
};

export default Square;