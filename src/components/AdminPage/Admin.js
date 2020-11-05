import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import ListGroup from 'react-bootstrap/ListGroup';
import AddInventory from './AddInventory';
import InventoryList from './InventoryList';
function AdminPage() {


  

  return (
    <Container>
      <br />
      <h3>Add Inventory</h3>
      <br />
      <AddInventory />
      <InventoryList />
    </Container>
  );

};


let Admin = () => (
  <div>
    <Route path="/Admin" component={AdminPage} />
  </div>
)

export default Admin;