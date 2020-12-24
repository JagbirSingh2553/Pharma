import React from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import './gynaecology.css';
import lezol from './gynaecology_images/lezol.png';
import serax from './gynaecology_images/serax.png';
import anzole from './gynaecology_images/anzole.png';
import vagiclin from './gynaecology_images/vagiclin.png';
import erion from './gynaecology_images/erion.png';
import SeraxVaginalCream from './gynaecology_images/SeraxVaginalCream.png';
import VADISKIT from './gynaecology_images/VADISKIT.png';

const Gyanecology = () => {
    return (
        <>
            <Header />
<div style={{backgroundColor:' #e5e9f7',paddingBottom:'70px'}}>
            <div style={{ width: '100%' }}>
                <div className="header-style" style={{ width: '100%' }}>
                    <div className="head">Gyanecology</div>
                    <div className="content">
                        <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="container" style={{ paddingLeft: '5% ' }} >
                    <div className="row " style={{ marginBottom: '10px', marginTop: '30px' }}>
                        <div className="gyan-main" style={{backgroundColor:'white'}} >
                            <img src={lezol} style={{ width: '170px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                            <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}><h3 style={{ fontWeight: '800', fontSize: '25px' }}>LEZOL</h3></span>
                            <span style={{ textAlign: 'center', color: '#df0021' }}>
                                <p style={{ fontSize: '18px' }}>Breast Cancer</p></span>
                        </div>
                        <div className="gyan-main" style={{backgroundColor:'white'}}>
                            <img src={serax} style={{ width: '170px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                            <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}><h3 style={{ fontWeight: '800', fontSize: '25px' }}>SERAX</h3></span>
                            <span style={{ textAlign: 'center', color: '#df0021' }}><p style={{ fontSize: '18px' }}>Volvovaginal Candidiasis</p></span>

                        </div>
                        <div className="gyan-main" style={{backgroundColor:'white'}}>
                            <img src={anzole} style={{ width: '170px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                            <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}><h3 style={{ fontWeight: '800', fontSize: '25px' }}>anzole</h3></span>
                            <span style={{ textAlign: 'center', color: '#df0021' }}><p style={{ fontSize: '18px' }}>Breast Cancer</p></span>

                        </div>
                    </div>

                    <div className="row " style={{ marginBottom: '10px', marginTop: '20px' }}>
                        <div className="gyan-main" style={{backgroundColor:'white'}}>
                            <img src={vagiclin}
                                style={{ width: '155px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                            <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}>
                                <h3 style={{ fontWeight: '800', fontSize: '25px' }}>Vagiclin</h3>
                            </span>
                            <span style={{ textAlign: 'center', color: '#df0021' }}>
                                <p style={{ fontSize: '18px' }}>Vaginal Infection <br></br> Specialist Ovule</p>
                            </span>
                        </div>
                        <div className="gyan-main" style={{backgroundColor:'white'}}>
                            <img src={erion} style={{ width: '155px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                            <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}><h3 style={{ fontWeight: '800', fontSize: '25px' }}>erion</h3></span>
                            <span style={{ textAlign: 'center', color: '#df0021' }}><p style={{ fontSize: '18px' }}>Tackles Anaemia Deliciously</p></span>

                        </div>
                        <div className="gyan-main" style={{backgroundColor:'white'}}>
                            <img src={SeraxVaginalCream} style={{ width: '170px', marginLeft: 'auto', marginRight: ' auto', display: 'block' }} />
                            <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}><h3 style={{ fontWeight: '800', fontSize: '25px' }}>SERAX</h3></span>
                            <span style={{ textAlign: 'center', color: '#df0021' }}><p style={{ fontSize: '18px' }}>Vaginal Cream</p></span>

                        </div>
                    </div>

                    <div className="col-sm-4 col-xs-4"></div>

                    <div className="gyan-main"  style={{marginLeft:'32.6%', marginTop:'20px', backgroundColor:'white'}}>
                        <img src={VADISKIT} style={{ width: '170px', marginLeft: 'auto', marginRight: ' auto', display: 'block' }} />
                        <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}><h3 style={{ fontWeight: '800', fontSize: '25px' }}>VADISKIT</h3></span>
                        <span style={{ textAlign: 'center', color: '#df0021' }}><p style={{ fontSize: '18px' }}>Freedom from <br></br>Leucorrhea</p></span>

                        <div className="col-sm-4 col-xs-4"></div>
                    </div>
                    </div>
                </div>
                </div>
                <Footer />
        </>
    )
}

export default Gyanecology;