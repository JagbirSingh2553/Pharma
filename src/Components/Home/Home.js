import React from 'react';
import './Home.css';
import png from '../../images/png.png';
import pharma_logo from '../../images/pharma_logo.png';
import Navbar from '../elements/NavBar/Navbar';
import { Link } from 'react-router-dom';
import Australia from '../../images/download2.png';
import Philippines from '../../images/download1.png';
import SouthAfrica from '../../images/download.png';
import UAE from '../../images/download3.png';
import Lesotho from '../../images/download4.png';
// import bgimage from '../../images/bgimage.png';
class Home extends React.Component {
render(){
    return (
        // main div
        <div className="main" >

            <div style={{ display: 'inline-block', float: 'right' }} >
                <ul className="nations" >
                    <div style={{ display: 'inline-block', float: 'right', margin: '10px' }} >
                        <li >
                            <a herf="#" title="Australia" >
                               <img className="flags" src={Australia}/> </a>
                        </li>
                    </div>
                    <div style={{ display: 'inline-block', float: 'right', margin: '10px' }} >
                        <li >
                            <a herf="#" title="Philippines" >
                            <img className="flags" src={Philippines}/></a> </li>
                    </div>
                    <div style={{ display: 'inline-block', float: 'right', margin: '10px' }} >
                        <li >
                            <a herf="#" title="South Africa" >
                            <img className="flags" src={SouthAfrica}/></a> </li>
                    </div>
                    <div style={{ display: 'inline-block', float: 'right', margin: '10px' }} >
                        <li >
                            <a herf="#" title="UAE" >
                            <img className="flags" src={UAE}/></a>
                             </li> </div>
                    <div style={{ display: 'inline-block', float: 'right', margin: '10px' }} >
                        <li >
                            <a herf="#" title="Lesotho" >
                            <img className="flags" src={Lesotho}/>
                            </a> </li>
                    </div>

                </ul>
            </div>
            <Navbar />

            { /* Logo Div */}
            <div className="logomanage" >
            <img className="logo" src={pharma_logo} />
            </div>

            { /* Infomation div */}
            <div className="info" >
                <div className="color" style={{ display: 'inline-block', fontSize: '' }} >
                    We are <img className="img" src={png} />
                    <div className="slash" > | </div>
                     </div>
                <div className="animation"
                    style={
                        { display: 'inline-block' }} > < a id="ani" > PHARMACEUTICAL </a></div >
            </div>

            { /* tagline div */}
            <div className="tagline" >
                <div className="tag" >
                    <h4 className="heading" > LIVE YOUR HEALTH STAR </h4>
                    <div className="para" >
                        <a > a phamaceutical company with a vsion to develop cost effective products </a>
                    </div>
                    <div className="para" >
                        <a > to reduce the burden of ever increasing healthcare cost. </a>
                    </div>
                </div>
            </div>

            { /* button div */}
            <div className="inline-button" >
                <Link to="/formulation" >
                    <button className="btn" render='button' onClick={() => { console.log('hi') }} style={{textAlign:'center'}} >
                        <span style={{textAlign:'center',paddingRight:'15px'}}> FORMULATION </span></button >
                </Link>
                <Link to="/api" >
                    <button className="btn" alt="button" > API </button>
                </Link>
                <Link to="/corporateprofile" >
                    <button className="btn" alt="button" > CORP PROFILE </button>
                </Link>
            </div>
        </div>
    );
                    }
};

export default Home;