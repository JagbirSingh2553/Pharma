import React from 'react'
import './contactus.css';
import Header from '../elements/header/header';
import Footer from '../elements/footer/footer';
import doc from '../../images/doc.jpeg';
const Contact = () => {

    return (
        <>
            <Header />
            <div>
                <div className="row" style={{ width: '100%' }}
                    style={{
                        backgroundImage: `url(${doc})`, backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginRight: '1px'
                    }} >
                    <div className="col-sm-12 col-xs-12"  style={{width:'100%'}}>
                        <div className="col-sm-6 col-xs-6" style={{ width:'100%',
                            paddingBottom: '17%',
                            marginLeft: 'auto',
                            marginRight: '600px',
                            marginTop: '17px', marginBottom: '10%'
                        }} >

                            <h2 style={{ marginLeft: '5%', marginTop: '20%' }}>Contact Us </h2>
                            <p style={{ marginLeft: '5%', wordSpacing: '0.1cm' }} >In case you have any queries or complaints, feel free<br></br>
                 to contact us by filling the form below, we request<br></br>
                you to be as specific as possible so that we can <br></br>
                respond to you in an expedient manner.  </p>

                            <br></br><br></br><br></br>
                            <p style={{ marginLeft: '5%', marginBottom: '-1.5px' }}>Ph.: (+91)-11-46541111 (30 lines),</p>
                            <p style={{ marginLeft: '5%', marginBottom: '-1.5px' }}>Fax.: (+91)-11-46541382</p>
                            <p style={{ marginLeft: '5%', marginBottom: '-1.5px' }}>Website: www.intermac.com</p>
                            <p style={{ marginLeft: '5%', marginBottom: '-1.5px' }}>Email: intermac.sales@intermac.com</p>
                            <p style={{ marginLeft: '5%' }}>Address: 17 Changi Business Park Central 1, Singapore 486073</p>
                        </div>
                        <div className="jack" style={{
                            float: 'right',
                            padding:'10%',
                            marginLeft: '-5%',
                            marginRight: '-5%',
                            marginBottom: '0%',
                            backgroundColor:'white', marginRight:'-40px', display:'inline-block',
                            width:'-100px',
                            marginTop: '-58%',
                            marginRight: '40px',
                        }}>
                            <div style={{}}>
                                <form className="form-detail" action="#" method="post" id="myform" style={{height:'100%'}}>
                                    <h2>REGISTER FORM</h2>
                                    <div className="form-group">
                                        <div className="form-row form-row-1">
                                            <label for="first_name" >First Name</label>
                                            <input type="text" name="first_name" id="first_name" className="input-text" />
                                        </div>
                                        <div className="form-row form-row-1">
                                            <label for="last_name">Last Name</label>
                                            <input type="text" name="last_name" id="last_name" className="input-text" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label for="your_email">Your Email</label>
                                        <input type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-row form-row-1 ">
                                            <label for="password">Password</label>
                                            <input type="password" name="password" id="password" className="input-text" required />
                                        </div>
                                        <div className="form-row form-row-1">
                                            <label for="message"></label>
                                            <input type="message" name="message" id="message" className="input-text" required />
                                        </div>
                                    </div>
                                    <div class="form-checkbox">
                                        <label className="container"><p>I agree to the <a href="#" className="text">Terms and Conditions</a></p>
                                            <input type="checkbox" name="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="form-row-last">
                                        <input type="submit" name="Submit" className="register" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;