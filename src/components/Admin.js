import React from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

let AdminPage = () => 
<div className="container">
    <br />
    <h3>Add Inventory</h3>
<br />
<Form>
<Form.Group as={Row} controlId="formHorizontalProduct">
  <Form.Label column sm={2}>
    Product Name
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" placeholder="Product Name" id="product" />
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalDescription">
  <Form.Label column sm={2}>
    Product Description
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" placeholder="Description" id="description"/>
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalPhoto">
  <Form.Label column sm={2}>
    Product Photo
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" placeholder="Photo URL" id="photo"/>
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalPrice">
  <Form.Label column sm={2}>
    Price
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" placeholder="$0.00" id="price"/>
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalQuantity">
  <Form.Label column sm={2}>
    Quantity
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" placeholder="Qty" id="quantity"/>
  </Col>
</Form.Group>

<Form.Group as={Row}>
  <Col sm={{ span: 10, offset: 2 }}>
    <Button type="submit">Add Product</Button>
  </Col>
</Form.Group>
</Form>

</div>


let Admin = () => (
    <div>
        <Route path="/Admin" component={AdminPage} />
    </div>
)

export default Admin;