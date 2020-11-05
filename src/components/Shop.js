import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'

function Shop() {
  //function to load our inventory list on the admin page so the admin can edit or delete product
  const [products, setProducts] = useState(false);
  
  useEffect(() => {
    const apiUrl = `http://localhost:4000/inventory`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((product) => {
        setProducts({ product: product });
      });
  }, [setProducts]);
  
  console.log(products);
  
  const items = []
  
  if (products) {
    products.product.forEach((item) => {
      if( item.is_deleted !== true)
      items.push(
        <Col className="col-lg-3 col-xs-8">
        <Card key={item.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" style={{ width: '18rem' }} src={item.product_photo} />
          <Card.Body>
            <Card.Title>{item.product_name}</Card.Title>
            <Card.Text>
              ${item.price}
            </Card.Text>
            <Button variant="primary" onclick="">Add To Cart</Button>
          </Card.Body>
        </Card>
        </Col>
      )
    })
  }
  
  return (
    <Container>
      <h3>Our Guinea Pigs for Sale</h3>
  <Row>
  <CardColumns>
    {items}
  </CardColumns>
  </Row>
  </Container>
  )
  
  
  
  }


export default Shop;