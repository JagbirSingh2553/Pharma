import React from 'react';
import './footer.css';
import pharma_logo from '../../../images/pharma_logo.png';
import png from '../../../images/png.png';

const Footer = () => {
    return(
        < >
        {/* #######################FOOTER STARTS HERE#######################
        #####################################################################
        #####################################################################*/}

<footer style={{width:'100%'}}>
            <div className="row" style={{padding: '10px',width:'100%'}}>
              <div className="col-sm-4 col-xs-4"></div>
              <div className="col-sm-4 col-xs-4">
                <span className="logo-2">
                    <img src={pharma_logo} style={{width: '35px',height: '40px'}}/>
                    </span>
                <span className="intermac-img"><img src={png}  
                  style={{height:'30px',width: '150px',marginLeft: '-35px', padding:'4px'}}/></span>
                  <span className="v1">|</span> 
                  <span ><p className="pharma"
                     style={{display:' inline-block',color: 'white',fontStyle:' italic', letterSpacing: '0.08cm'
                     ,marginLeft:'-15px',opacity: '0.3'}}>PHARMACEUTICAL</p></span>
          
              
                <h4 style={{textAlign: 'center',fontSize: '20px',textAlign: 'center',color: 'white'}}> LIVE YOUR HEALTH STAR </h4>
                      <p style={{color: 'white',fontSize: '12px',textAlign: 'center'}}>GROUP COMPANY OF INTERMAC</p>
              </div>
              <div className="col-sm-4 col-xs-4"></div>
            </div>
          </footer>

            {/* #######################FOOTER ENDS HERE#######################
        #####################################################################
        #####################################################################*/}

</>

    );
};

export default Footer;