import React from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


let HomePage = () => <div><h2>This is the Homepage!</h2></div>

let Home = () => (
    <div>
        <Route path="/" component={HomePage} />
    </div>
)


export default Home;