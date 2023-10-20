import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import "./signin.css";

const Signin = () => {
  return (
    <>
      <Header />
      <div className="form">
        <div className="main bg-dark">
          <div className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h2>Sign In</h2>
            <Form />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signin;
