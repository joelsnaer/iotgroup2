import ruwashing from '../../images/ruwashing.png'
/*
    --- Header component ---
    Generates the header
    Loads our logo and adds a line below it to split it from the main body of our website.
*/

const Header = () => (
    <div>
        <img className="header" src={ruwashing} alt="logo" />
        <div className="line"/>
    </div>
    
);

export default Header;
