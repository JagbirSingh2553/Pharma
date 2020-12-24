import React from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import aquanil from '../duiretic/duiretic_images/aquanil.png';
import caspilet from '../duiretic/duiretic_images/caspilet.png';
import './duiretic.css';

const Diuretics = () => {
    return (
        <>
            <Header />
            <div style={{backgroundColor:'#e5e9f7',paddingBottom:'70px'}}>
            <div style={{ width: '100%'}}>
                <div className="header-style" style={{ width: '100%' }}>
                    <div className="head">Diuretics</div>
                    <div className="content">
                        <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a>
                    </div>
                </div>
            </div>
            <div className="container" style={{ paddingLeft: '20%'}} >
                <div className="row " style={{ marginBottom: '10px', marginTop: '30px', marginLeft:'-150px' }}>
                    <div className="diuretics-main" style={{backgroundColor:'white', marginTop:'50px'}}>
                        <img src={aquanil} style={{ width: '240px',height:'200px' , marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                        <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}>
                            <h3 style={{ fontWeight: '800', fontSize: '25px' }}>AQUANIL</h3>
                        </span>
                        <span style={{ textAlign: 'center', color: '#df0021' }}>
                            <p style={{ fontSize: '18px' }}>Volvovaginal Candidiasis</p>
                        </span>
                    </div>
                    <div className="diuretics-main" style={{backgroundColor:'white', marginLeft:'55%', marginTop:'-61%'}}>
                        <img src={caspilet} style={{ width: '240px',height:'200px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                        <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}>
                            <h3 style={{ fontWeight: '800', fontSize: '25px' }}>CASPILET</h3>
                        </span>
                        <span style={{ textAlign: 'center', color: '#df0021' }}>
                            <p style={{ fontSize: '18px' }}>Breast Cancer</p>
                        </span>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Diuretics;