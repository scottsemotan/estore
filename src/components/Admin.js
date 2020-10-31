import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function AdminPage() {


  //Function handle submit bitton to add product to inventory list 
  function handleSubmit(e) {
    e.preventDefault();

    let newProduct = {
      product_name: e.target.product.value,
      description: e.target.description.value,
      product_photo: e.target.photo.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
    }
    console.log(newProduct);

    fetch('http://localhost:4000/inventory',
      {
        body: JSON.stringify(newProduct),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
  }


  function handleChange(event) {
  };

  //function to load our inventory list on the admin page so the admin can edit or delete product

  function componentDidMount() {
    
    fetch('http://localhost:4000/inventory',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(product => console.log(product))
    }

  componentDidMount();



  const [products, setProducts] = useState({
    product_name: '',
    description: '',
    product_photo: '',
    price: '',
    quantity: '',
  });

  //function to GET our inventory list on the admin page
  
    
    


  return (
    <Container>
      <br />
      <h3>Add Inventory</h3>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} >
          <Form.Label column sm={2}>
            Product Name
            </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={handleChange} type="text" placeholder="Product Name" id="product" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} >
          <Form.Label column sm={2}>
            Product Description
            </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={handleChange} type="text" placeholder="Description" id="description" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Product Photo
            </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={handleChange} type="text" placeholder="Photo URL" id="photo" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} >
          <Form.Label column sm={2}>
            Price
            </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={handleChange} type="text" placeholder="$0.00" id="price" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} >
          <Form.Label column sm={2}>
            Quantity
  </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={handleChange} type="text" placeholder="Qty" id="quantity" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" >Add Product</Button>
          </Col>
        </Form.Group>
      </Form>

      <Row id="products">
        <ul>
          <li></li>
        </ul>

      </Row>

    </Container>
  );

};


let Admin = () => (
  <div>
    <Route path="/Admin" component={AdminPage} />
  </div>
)

export default Admin;