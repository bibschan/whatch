import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';


function Header () {
    return (
        <div className='header'>
            <div className='header--flex'>
                
                    <Link to="/">
                    <HomeIcon fontSize="large" />
                        {/* <img src='assets/movies-logo.png' className="icon" alt=""/> */}
                    </Link>
                    <Link to="/matches">
                        <MovieFilterIcon fontSize="large"/>
                        {/* <img src='assets/messages-logo.png' className="icon" alt=""/> */}
                    </Link>
                    <Link to='/profile'>
                        <PersonIcon fontSize="large"/>
                        {/* <img src="assets/profile-logo.png" className="icon" alt=""/> */}
                    </Link>
            </div>
        </div>
    )
}

export default Header;