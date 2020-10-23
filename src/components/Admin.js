import React from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


let AdminPage = () => <div><h2>This is the Admin!</h2></div>


let Admin = () => (
    <div>
        <Route path="/Admin" component={AdminPage} />
    </div>
)


export default Admin;