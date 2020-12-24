import React from 'react';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Formulation from './Components/Formulation/formulation';
import Api  from "./Components/Api/api";
import Corpprofile from './Components/CorporateProfile/corporateprofile';
import Contact from './Components/contactus/contactus';
import Gyanecology from './Components/elements/products/gynaecology/gynaecology';
import Diuretics from './Components/elements/products/duiretic/duiretic';
import Gout from './Components/elements/products/goutmanagement/gout';
import Generics from './Components/elements/products/generics/generics';
// import '../src/Components/elements/form/send.json';
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return(
      <>
    <BrowserRouter>
      <React.Fragment>
          <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/formulation' component={Formulation} ></Route>
          <Route path='/api' component={Api} ></Route>
          <Route path='/corporateprofile' component={Corpprofile}/>
          <Route path='/contactus' component={Contact}/>
          <Route path='/gyanecology' component={Gyanecology}/>
          <Route path='/diuretics' component={Diuretics}/>
          <Route path='/goutmanagement' component={Gout}/>
          <Route path='/generics' component={Generics}/>
          </Switch>         
      </React.Fragment>
    </BrowserRouter>
    
    </>
    )
}

export default App;