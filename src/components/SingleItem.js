import React from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


let SingleItemPage = () => <div><h2>This is the SingleItem page!</h2></div>

let SingleItem = () => (
    <div>
        <Route path="/item" component={SingleItemPage} />
    </div>
)


export default SingleItem;