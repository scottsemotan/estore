import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Admin from './components/Admin';
import Checkout from './components/Checkout';
import LeftSide from './components/LeftSide';
import SlideShow from './components/Carousel';
import RegisterLogin from './components/RegisterLogin';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register-login" component={RegisterLogin} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/Login" component={Login} />
            <Route path="/Admin" component={Admin} />
      
              <div class="container">
                <div class="row">
                  <div className="col-lg-3">
                    <LeftSide />
                  </div>
                  <div class="col-lg-9">
                    <SlideShow />
                    <Home />
                  </div>
        
                </div>
              </div>
            <Footer />
    
            
          </Switch>
      </div>
    </Router>
  );
}

export default App;