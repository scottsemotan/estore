import React from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


let ShopPage = () => <div><h2>This is the Shop!</h2></div>

let Shop = () => (
    <div>
        <Route path="/shop" component={ShopPage} />
    </div>
)


export default Shop;