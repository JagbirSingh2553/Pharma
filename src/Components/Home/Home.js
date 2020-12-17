import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import './Home.css';
import png from '../../images/png.png';
import pharma_logo from '../../images/pharma_logo.png';
import Navbar from '../NavBar/Navbar';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';


const Home = (props) => {

  console.log(props);
  return (

    // main div
    <div className="main">
      <Navbar
      grid={{
        gutter:16,
          xs: '480px',
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          xxl: '1600px',
      }}/>
      {/* Logo Div */}
      <div className="logomanage" >
        <img className="logo" src={pharma_logo}></img>
      </div>

      {/* Infomation div */}
      <div className="info">
      <div className="color">
        We are <img className="img" src={png}></img>
        <div className="slash">|</div>
      <div className="animation">PHARMACEUTICAL</div>
      </div>
      </div>

      {/* tagline div */}
      <div className="tagline">
        <div className="tag">
          LIVE YOUR HEALTH STAR
        </div>
        <div className="para">
          <a>a phamaceutical company with a vsion to develop cost effective products </a>
        </div>
        <div className="para">
          <a className="para">to reduce the burden of ever increasing healthcare cost.</a>
        </div>
      </div>

      {/* button div */}
      <div className="inline-button">
        <Link to="/Formulation">
      <button className="btn" alt="button">FORMULATION</button>
      </Link>
      <Link to="/Api">
      <button className="btn" alt="button">API</button>
      </Link>
      <Link to="/Corpprofile">
      <button className="btn" alt="button">CORP PROFILE</button>
      </Link>
      </div>
    </div>
  );

};

export default Home;