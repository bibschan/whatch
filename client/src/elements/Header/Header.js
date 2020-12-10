import { Link } from "react-router-dom";

function Header () {
    return (
        <div className='header'>
            <div className='header--flex'>
                
                    <Link to="/">
                        <img src='assets/movies-logo.png' className="icon" alt=""/>
                    </Link>
                    <Link to="/matches">
                        <img src='assets/messages-logo.png' className="icon" alt=""/>
                    </Link>
                    <Link to='/profile'>
                        <img src="assets/profile-logo.png" className="icon" alt=""/>
                    </Link>
            </div>
        </div>
    )
}

export default Header;