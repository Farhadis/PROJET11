import React from "react";
import Accounts from "../../components/Accounts/Accounts"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"
import EditUser from "../../components/EditUser/EditUser"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../Redux/reducers"; 
import { useEffect } from "react";


const User = () => {
    const firstName = useSelector((state) => state.user.user.firstName);
    const lastName = useSelector((state) => state.user.user.lastName);
    const userName = useSelector((state) => state.user.user.userName);
    let token = localStorage.getItem("token");  
    if (!token) {
      token = sessionStorage.getItem("token");
    }
  
    const dispatch = useDispatch ();     
    useEffect(() => {
      dispatch(getUserProfile({token:token, userName:userName}));
    }, [dispatch, userName]);

    return (
        <>    
            <Nav />

            <div className='main bg-dark'>
            <h1>Welcome Back<br />{firstName} {lastName} !</h1>

            <EditUser />
            
            <Accounts 
                title = {"Argent Bank Checking (x8349)"}
                amount ={"$2,082.79"}
                description = {"Available Balance"}
            />
            <Accounts 
                 title = {"Argent Bank Savings (x6712)"}
                 amount ={"$10,928.42"}
                 description = {"Available Balance"}
            />
            <Accounts 
                title = {"Argent Bank Credit Card (x8349)"}
                amount ={"$184.30"}
                description = {"Current Balance"}
            />
            </div>

            <Footer/>
        </>
    )
}

export default User