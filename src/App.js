import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Admin from './components/Admin';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/Admin" component={Admin} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
