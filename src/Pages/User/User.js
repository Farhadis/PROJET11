import React from "react";
import Accounts from "../../components/Accounts/Accounts"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"
import EditUser from "../../components/EditUser/EditUser"


const User = () => {
    return (
        <>    
            <Nav />

            <div className='main bg-dark'>

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