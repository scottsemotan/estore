import React from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


let RegisterLoginPage = () => <div><h2>This is the Homepage!</h2></div>

let RegisterLogin = () => (
    <div>
        <Route path="/register-login" component={RegisterLoginPage} />
    </div>
)


export default RegisterLogin;