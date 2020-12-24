import React from 'react';
import pharma_logo from '../../../images/pharma_logo.png';
import { Link } from 'react-router-dom';
import Australia from '../../../images/australia.png';
import Philippines from '../../../images/philippines-flag-icon-32.png';
import SouthAfrica from '../../../images/south-africa-flag-icon-16.png';
import UAE from '../../../images/united-arab-emirates-flag-icon-32.png';
import Lesotho from '../../../images/lesotho-flag-icon-32.png';
import './header.css';
import Navbar from "../NavBar/Navbar";

const Header = () => {
return(
        < >
          <div style={{ width: '100%' }}>
                <div className="formulation-main">
                    <Navbar></Navbar>
                </div>
                <div style={{ textAlign: 'center', marginTop: '-80px' }}>
                    <Link to='/'>
                        <img className="mini" src={pharma_logo}></img>
                    </Link>
                </div>

                <div style={{ display: 'inline-block', float: 'right', marginTop: '-80px', width: '100%' }} >
                    <ul className="nations" >
                        <div style={{ display: 'inline-block', float: 'right', margin: '10px' }} >
                            <li >
                                <a herf="#" title="Lesotho" >
                                    <img className="flags" src={Lesotho} /> </a>
                            </li>
                        </div>
                        <div style={{ display: 'inline-block', float: 'right', margin: '10px' }} >
                            <li >
                                <a herf="#" title="UAE" >
                                    <img className="flags" src={UAE} /></a> </li>
                        </div>
                        <div style={{ display: 'inline-block', float: 'right', margin: '10px' }} >
                            <li >
                                <a herf="#" title="South Africa" >
                                    <img className="flags" src={SouthAfrica} /></a> </li>
                        </div>
                        <div style={{ display: 'inline-block', float: 'right', margin: '10px' }} >
                            <li >
                                <a herf="#" title="Philippines" >
                                    <img className="flags" src={Philippines} /></a>
                            </li> </div>
                        <div style={{ display: 'inline-block', float: 'right', margin: '10px' }} >
                            <li >
                                <a herf="#" title="Australia" >
                                    <img className="flags" src={Australia} />
                                </a> </li>
                        </div>

                    </ul>
                </div>
            </div>
</>

    );
};

export default Header;