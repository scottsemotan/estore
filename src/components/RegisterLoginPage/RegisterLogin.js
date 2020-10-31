import React from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Login from './Login';
import Register from './Register';

let RegisterLoginPage = () => 

<Container>
<br />

<Row>
	
<Login></Login>
<Register></Register>

</Row>
<br />
</Container>

let RegisterLogin = () => (
    <div>
        <Route path="/register-login" component={RegisterLoginPage} />
    </div>
)


export default RegisterLogin;