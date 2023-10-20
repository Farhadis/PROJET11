import React from "react";
import "./accounts.css"
import Button from "../Button/Button";

function Accounts({title, amount, description}){
    return(
        <div className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button 
                    title = {"view transactions"}
                    size = {"transaction-button"}
                />
            </div>
        </div>
    )
}





export default Accounts