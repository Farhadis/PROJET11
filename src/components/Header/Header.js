import './header.css'
import { NavLink } from "react-router-dom";
import Nav from '../Nav/Nav';
import logo from '../../assets/argentBankLogo.png'



const Header = () => {
    const token = localStorage.getItem('token');
      
    if (!token){
    return (
        <div className="main-nav">
            <NavLink className="main-nav-logo" to="/" >
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            <div className="main-nav-item">
                
                <NavLink
                    className="nav-link"
                    to="/login">
                    <i className="fa fa-user-circle"></i>
                        Sign In
                </NavLink>

              
            </div>
        </div>
    )} else {
        return (
            <Nav />
    )
}
};

export default Header