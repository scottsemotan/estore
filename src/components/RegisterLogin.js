import React from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


let RegisterLoginPage = () => 
<Container>
<br />
<Row>
    <Col className="col-6"> 
    <h3> Login </h3>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
</Col>


<Col className="col-6">
<h3> Register </h3>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option value="AL">Alabama</option>
	    <option value="AK">Alaska</option>
	    <option value="AZ">Arizona</option>
	    <option value="AR">Arkansas</option>
	    <option value="CA">California</option>
	    <option value="CO">Colorado</option>
	    <option value="CT">Connecticut</option>
	    <option value="DE">Delaware</option>
	    <option value="DC">District Of Columbia</option>
	    <option value="FL">Florida</option>
	    <option value="GA">Georgia</option>
	    <option value="HI">Hawaii</option>
	    <option value="ID">Idaho</option>
	    <option value="IL">Illinois</option>
	    <option value="IN">Indiana</option>
	    <option value="IA">Iowa</option>
	    <option value="KS">Kansas</option>
	    <option value="KY">Kentucky</option>
	    <option value="LA">Louisiana</option>
	    <option value="ME">Maine</option>
	    <option value="MD">Maryland</option>
	    <option value="MA">Massachusetts</option>
	    <option value="MI">Michigan</option>
	    <option value="MN">Minnesota</option>
	    <option value="MS">Mississippi</option>
	    <option value="MO">Missouri</option>
	    <option value="MT">Montana</option>
	    <option value="NE">Nebraska</option>
	    <option value="NV">Nevada</option>
	    <option value="NH">New Hampshire</option>
	    <option value="NJ">New Jersey</option>
	    <option value="NM">New Mexico</option>
	    <option value="NY">New York</option>
	    <option value="NC">North Carolina</option>
	    <option value="ND">North Dakota</option>
	    <option value="OH">Ohio</option>
	    <option value="OK">Oklahoma</option>
	    <option value="OR">Oregon</option>
	    <option value="PA">Pennsylvania</option>
	    <option value="RI">Rhode Island</option>
	    <option value="SC">South Carolina</option>
	    <option value="SD">South Dakota</option>
	    <option value="TN">Tennessee</option>
	    <option value="TX">Texas</option>
	    <option value="UT">Utah</option>
	    <option value="VT">Vermont</option>
	    <option value="VA">Virginia</option>
	    <option value="WA">Washington</option>
	    <option value="WV">West Virginia</option>
	    <option value="WI">Wisconsin</option>
	    <option value="WY">Wyoming</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
</Col>
</Row>
<br />
</Container>

let RegisterLogin = () => (
    <div>
        <Route path="/register-login" component={RegisterLoginPage} />
    </div>
)


export default RegisterLogin;