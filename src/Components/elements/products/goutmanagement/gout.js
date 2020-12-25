import React from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Elacin from '../goutmanagement/goutmanagement_images/Elacin.png';
import Macarth from '../goutmanagement/goutmanagement_images/Macarth.png';
import './gout.css';

const Gout = () => {
    return (
        <>
            <Header />
<div style={{backgroundColor:' #e5e9f7',paddingBottom:'70px'}}>
<div style={{ width: '100%' }}>
                <div className="header-style" style={{ width: '100%' }}>
                    <div className="head">GOut</div>
                    <div className="content">
                        <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a>
                    </div>
                </div>
            </div>
            <div className="container" style={{ paddingLeft: '20%' }} >
                <div className="row " style={{ marginBottom: '10px', marginTop: '30px', marginLeft:'-150px' }}>
                    <div className="gout-main" style={{backgroundColor:'white', marginTop:'20px',marginLeft:'-20px'}}>
                        <img src={Elacin} style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block' ,height:'200px'}} />
                        <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}>
                            <h3 style={{ fontWeight: '1000', fontSize: '50px' }}>ELACIN</h3>
                        </span>
                        <span style={{ textAlign: 'center', color: '#df0021' }}>
                            <p style={{ fontSize: '18px' }}>Febuxostat Tablets</p>
                            <p style={{marginTop:'20px',color:'black' ,fontSize:'13px'}}><span style={{fontWeight:'bold'}}>Packing:</span> Box  of 30 Tablets</p>
                        </span>
                    </div>
                    <div className="gout-main" style={{backgroundColor:'white', marginLeft:'53%', marginTop:'-54%'}}>
                        <img src={Macarth} style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block', height:'200px' }} />
                        <span style={{ textAlign: 'center', marginBottom: '-3px', color: '#f4007b', textTransform: 'uppercase' }}>
                            <h3 style={{ fontWeight: '1000', fontSize: '50px' }}>MACARTH</h3>
                        </span>
                        <span style={{ textAlign: 'center', color: '#df0021' }}>
                            <p style={{ fontSize: '18px' }}>Etoricoxib Tablets</p>
                            <p style={{marginTop:'20px',color:'black' ,fontSize:'13px'}}><span style={{fontWeight:'bold'}}>Packing:</span> Box  of 30 Tablets</p>
                        </span>
                    </div>
                </div>
            </div>
</div>
            <Footer />
        </>
    )
}

export default Gout;