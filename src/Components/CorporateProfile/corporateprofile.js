import React from 'react';
import Header from '../elements/header/header';
import Footer from '../elements/footer/footer';
import b from './corporateprofile_image/b.png';
import c from './corporateprofile_image/c.png';
import d from './corporateprofile_image/d.png';
import e from './corporateprofile_image/e.png';
import f from './corporateprofile_image/f.png';
import co_1 from './corporateprofile_image/co_1.png';
import co_2 from './corporateprofile_image/co_2.png';
import co_3 from './corporateprofile_image/co_3.png';
import { Link } from 'react-router-dom';
import './corporateprofile.css';

const Corpprofile = () => {
    return (
        <>
            <Header />
            <div >
                <div className="row" style={{ width: '101%' }}>
                    <div className="col-sm-12 col-xs-12 lady" >
                        <div className="col-sm-6 col-xs-6">
                            <h1 style={{ color: 'white', marginTop: '50px', fontSize: '70px', fontWeight: '700', paddingLeft: '5%' }}>Mediz</h1>
                            <h2 style={{ color: 'white', marginTop: '-10px', paddingLeft: '5%' }}>Medical Center in US</h2>
                            <p style={{ color: 'white', paddingLeft: '5%', marginLeft: ' 0px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptatum deserunt
                            est vitae quisquam reprehenderit quos natus, incidunt ullam officiis. At praesentium molestiae
                            blanditiis labore iure mollitia eius nisi voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptatum deserunt
                            est vitae quisquam reprehenderit quos natus, incidunt ullam officiis. At praesentium molestiae
                            blanditiis labore iure mollitia eius nisi voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptatum deserunt
                            est vitae quisquam reprehenderit quos natus, incidunt ullam officiis. At praesentium molestiae
              blanditiis labore iure mollitia eius nisi voluptas.</p>

                            <Link to="/contactus">
                                <button>CONTACT NOW</button>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-xs-12 " style={{ height: '100px' }}></div></div>

                <div className="row">
                    <div className="col-sm-12 col-xs-12 " style={{ backgroundColor: '#b63d37' }}>
                        <div className="col-sm-6 col-xs-6" id="b">
                            <img  src={b} style={{
                                 height: '500px', 
                                 width: '450px', 
                                 marginTop: '30px', 
                                 marginLeft: '10%' }} />
                        </div>
                        <div className="col-sm-6 col-xs-6"  style={{ color: 'white', marginLeft: '50%', marginTop: '-40%', }}>
                            <h2 style={{ color: 'white', marginLeft: '20%', marginTop: '5%' }}>Company Info & Overview</h2>
                            <p style={{ color: 'white', marginTop: '10%' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            . Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Company Info & Overview
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            . Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Company Info & Overview
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            . Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Company Info & Overview
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                        consectetur odio quidem!</p>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginBottom: '8%' }}>
                    <div className="col-sm-12 col-xs-12">
                        <h3 className="Ownership">Ownership & Management Team</h3>
                    </div>
                    <div className="col-sm-12 col-xs-12" >
                        <div className="col-sm-4 col-xs-4" style={{ marginLeft: '5%' }} >
                            <img src={co_3} className="manage" />
                            <h3 style={{ textAlign: 'center', color: '#b63d37', fontWeight: 'bolder' }}>Management Team</h3>
                            <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit</p>
                        </div>
                        <div className="col-sm-4 col-xs-4" style={{ marginLeft: '35%', marginTop: '-25.5%' }} >
                            <img src={co_2} className="manage" />
                            <h3 style={{ textAlign: 'center', color: '#b63d37', fontWeight: 'bolder' }}>Management Team</h3>
                            <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit</p>
                        </div>
                        <div className="col-sm-4 col-xs-4" style={{ marginLeft: '65%', marginTop: '-25.5%' }} >
                            <img src={co_1} className="manage" />
                            <h3 style={{ textAlign: 'center', color: '#b63d37', fontWeight: 'bolder' }}>Management Team</h3>
                            <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-xs-12" style={{ backgroundColor: '#b63d37', width:'100%' }}>
                        <div className="col-sm-6 col-xs-6">
                            <img src={c} style={{ height: '500px', width: '450px', marginTop: '30px', marginLeft: '20%' }} />
                        </div>
                        <div className="col-sm-6 col-xs-6" style={{ marginBottom: '5%', marginLeft: '50%', marginTop: '-40%' }} >
                            <h2 style={{ color: 'white', marginLeft: '20%', marginTop: '5%' }}>Mission & Vision Statement</h2>
                            <p style={{ color: 'white', marginTop: '10%' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            . Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Company Info & Overview
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            . Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Company Info & Overview
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            . Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Company Info & Overview
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                        consectetur odio quidem!</p>
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-12 col-xs-12" style={{ backgroundColor: 'white', padding: '0px', marginBottom: '5%' }}>

                        <div className="col-sm-6 col-xs-6" style={{ marginTop: '10%' }}>
                            <h2 style={{ color: 'black', marginTop: '5%', marginLeft: '1%', wordSpacing: '0.2cm', fontWeight: '800', letterSpacing: '0.01cm' }}>Product/Service & Customer/Market</h2>
                            <p style={{ color: 'black', marginTop: '10%', marginLeft: '2%' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            . Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Company Info & Overview
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            . Quisquam quas wLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            . Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Company Info & Overview
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                        consectetur odio quidem!</p>
                        </div>

                        <div className="col-sm-6 col-xs-6" style={{ marginTop: '10%' }}>
                            <img src={d} style={{ height: '500px', width: '450px', marginLeft: '120%', marginTop: '-110%' }} />
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-12 col-xs-12" style={{ backgroundColor: '#b63d37' }}>
                        <div className="col-sm-6 col-xs-6">
                            <img src={e} style={{ height: '500px', width: '450px', marginTop: '30px', marginLeft: '10%' }} />
                        </div>
                        <div className="col-sm-6 col-xs-6" style={{ marginBottom: '3%', marginLeft: '49%', marginTop: '-40%' }}>
                            <h2 style={{ color: 'white', fontWeight: '600', paddingTop: '10%', textTransform: 'uppercase' }}>Future Goal</h2>
                            <p style={{ color: 'white', fontSize: '16px', wordSpacing: '0.01cm', paddingRight: '3px', paddingLeft: '3px', marginTop: '10%' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            . Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem!Company Info & Overview
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                            consectetur odio quidem! Company Info & OverviewLorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi voluptas corrupti atque fuga nulla facilis, beatae enim quasi expedita
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas corrupti
                            atque fuga nulla facilis, beatae enim quasi expedita. Quisquam quas nostrum earum ea, animi ullam autem
                        consectetur odio quidem!</p>
                        </div>

                    </div>

                </div>



                <div className="row">
                    <div className="col-sm-12 col-xs-12" style={{ backgroundColor: 'white', width: '1200px' }}>
                        <div className="col-sm-12 col-xs-12">
                            <h2 style={{ color: 'black', fontWeight: '600', textTransform: 'uppercase', textAlign: 'center', marginTop: '4%', marginBottom: '2%', marginLeft: '17%' }}>
                                Certification & Recognition </h2>
                        </div>
                        <div className="col-sm-12 col-xs-12" style={{ marginBottom: '3%' }}>
                            <img src={f} style={{ width: '70%', marginLeft: ' 18%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Corpprofile;