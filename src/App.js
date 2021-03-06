import React, { Fragment, useEffect} from 'react';
import { BrowserRouter as Router,  Switch } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Slide from './components/layout/Slide';
import Navbar from './components/layout/Navbar';
import Service from './components/layout/Service';
import Footer from './components/layout/Footer'
// import Login from './components/auth/Login';
// import Signup from './components/auth/Signup';

function App() {
  useEffect(()=> {
    M.AutoInit();
  });
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Slide/>
        <Service/>
        <Footer/>
        <div className="container">
        <Switch>
          {/* <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} /> */}
        </Switch>
        </div>
       
       
      </Fragment>
    </Router>
  );
}

export default App;
