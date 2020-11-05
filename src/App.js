import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Admin from './components/AdminPage/Admin';
import RegisterLoginPage from './components/RegisterLoginPage/RegisterLogin'
import Checkout from './components/Checkout';
import LeftSide from './components/LeftSide';
import Carousel from './components/Carousel';
import User from './components/User';
import Shop from './components/Shop';
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
            <Route path="/user" component={User} />
            <Route path="/shop" component={Shop} />

              <div className="container">
                <div className="row">
                  <div className="col-lg-2">
                  </div>
                  <div className="col-lg-8">
                    <Carousel />
                    </div>
                    <div className="row">
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