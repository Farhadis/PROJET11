import React from 'react';
import { NavLink } from 'react-router-dom';
import './page404.css'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Page404 = () => {
  return (
    <>
    <Header />

    <div className="error-main">
      <h2 className="error-404">404</h2>
      <h3 className="error-title">Page Not Found !</h3>
      <NavLink to="/" className="error-link">Go to Home Page</NavLink>
    </div>

    <Footer />
    </>
  );
};

export default Page404;