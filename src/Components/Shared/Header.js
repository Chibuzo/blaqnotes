import { Link } from "react-router-dom";

const Header = ({ path }) => {

    return (
        <header className="custom-header text-center">
            <Link to="/">
                <h1>b</h1>
                <h2>BlaqNotes</h2>
            </Link>    
        </header>
    );
}

export default Header;