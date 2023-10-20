import logo from "../../assets/argentBankLogo.png"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";





const Nav = () => {

  const dispatch = useDispatch()
  const userName = useSelector(state => state.user.user.userName)
  const navigate = useNavigate()
  
  
 
  // const [name, setName] = useState("");



  // useEffect(() => {
  //   setName(userName);
  // }, [userName]);



  const signOut = (e) => {
    e.preventDefault();
    dispatch({type : "SIGNOUT"});
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate('/login')
  };
  
  // const removeToken = () => {
  //   sessionStorage.removeItem("token");
  // }

    return (
        <div className="main-nav">
        <NavLink className="main-nav-logo" to='/'>
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          {/* <h1 className="sr-only" onClick={removeToken()}>Argent Bank</h1> */}
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div >
          <NavLink className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {userName}
          </NavLink>
            
          <NavLink
            className="main-nav-item"  
            onClick={signOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
       
        </div>
      </div>

    )
}

export default Nav





