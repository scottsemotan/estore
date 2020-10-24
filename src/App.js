import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Admin from './components/Admin';
import RegisterLoginPage from './components/RegisterLogin'
import Checkout from './components/Checkout';
import LeftSide from './components/LeftSide';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/Admin" component={Admin} />
            <Route path="/register-login" component={RegisterLoginPage} />

              <div class="container">
                <div class="row">
                  <div className="col-lg-3">
                    <LeftSide />
                  </div>
                  <div class="col-lg-9">
                    <Carousel />
                    <Home />
                  </div>
                </div>
              </div>    
          </Switch>
          <Footer /> 
      </div>
    </Router>
  );
}

export default App;