import React from 'react';
import Header from '../elements/header/header';
import Footer from '../elements/footer/footer';
import './formulation.css';
import generics from '../../images/formulation_images/generics.png';
import { Link } from 'react-router-dom';
import vitamac from '../../images/formulation_images/vitamac.png';
import gyanecology from '../../images/formulation_images/gyanecology.png';
import diuretics from '../../images/formulation_images/diuretics.png';
import dermatology from '../../images/formulation_images/dermatology.png';
import goutmanagement from '../../images/formulation_images/goutmanagement.png';
import main from '../../images/formulation_images/main.png';

const Formulation = () => {
    return (
        < >
<div style={{backgroundColor:'white'}}>
            <Header />
            </div>

            {/* #######################MIDDELE CONTENT STARTS HERE#######################
        #####################################################################
        #####################################################################*/}
            <div className="middle-background" style={{width:'100%'}}>
                <div id="helo" style={{ width: '100%'}}>
                    <div className="header-formulation" style={{ width: '100%',margin:'0%', padding:'0%' }}>
                        <div className="head">Formulation</div>
                        <div className="under">_</div>
                        <div className="content">
                            <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a>
                        </div>
                    </div>
                </div>
                <div>
                <div className="row" style={{ width: '100%'}}>
                    <div className="col-sm-4 col-xs-4" >
                        <div className="generics">
                        <Link to="/generics">
                            <img src={generics} className="image"
                                style={{ width: '280px', transition: '.5s', height: '100px', marginLeft: '70%', marginTop: '22%' }} />
                        </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-4" ></div>
                    <div className="col-sm-4 col-xs-4" >
                        <div className="goutmanagement">
                        <Link to="/goutmanagement">
                            <img src={goutmanagement} className="image"
                                style={{ width: '280px', transition: '.5s', height: '100px', marginTop: '22%', marginLeft: '-38%' }} />
                        </Link>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ width: '100%' }} >
                    <div className="col-sm-4 col-xs-4" >
                        <div className="dermatology">
                        <Link to="/">
                            <img src={dermatology} className="image"
                                style={{ width: '280px', transition: '.5s', height: '100px', marginLeft: '53%', marginTop: '16%' }} />
                        </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-4" style={{ width: '32.333333%' }} >
                        <Link to="/">
                            <img src={main} className="main_image"
                                style={{ width: '400px', height: '270px', paddingRight: '20px', marginTop: '-20px', marginLeft: '20px' }} />
                        </Link>
                    </div>

                    <div className="col-sm-4 col-xs-4" >
                        <div className="diuretics">
                        <Link to="/diuretics">
                            <img src={diuretics} className="image"
                                style={{ width: '280px', transition: '.5s', height: '100px', marginTop: '16%', marginLeft: '-19% ' }} />
                        </Link>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ width: '100%' }}>
                    <div className="col-sm-4 col-xs-4" >
                        <div className="gyanecology">
                        <Link to="/gyanecology">
                            <img src={gyanecology} className="image"
                                style={{ width: '280px', transition: '.5s', height: '100px', marginLeft: '65%', marginTop: '-8%' }} />
                        </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-4" ></div>
                    <div className="col-sm-4 col-xs-4" >
                        <div className="vitamac">
                        <Link to="/"><img src={vitamac} className="image"
                            style={{ width: '280px', transition: '.5s', height: '100px', marginTop: '-8%', marginLeft: '-32%' }} />
                        </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* #######################MIDDELE CONTENT ENDS HERE#######################
        #####################################################################
        #####################################################################*/}
            <Footer />
        </>

    );
};

export default Formulation;