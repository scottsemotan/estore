import React from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


let CheckoutPage = () => <div><h2>This is the Checkout!</h2></div>

let Checkout = () => (
    <div>
        <Route path="/Checkout" component={CheckoutPage} />
    </div>
)


export default Checkout;