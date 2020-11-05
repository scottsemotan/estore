import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


function InventoryList() {
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
            items.push(
                <ListGroup.Item key={item.id}>{item.product_name} - Description: {item.description} - ${item.price} - Qty: {item.quantity}  <Button className="btn-success">EDIT</Button>  <Button className="btn-danger" >DELETE</Button></ListGroup.Item>
            )
        })
    }

    // deletePet = (id) => {
    //console.log(id)
    // fetch(`http://localhost:4000/inventory/${id}`,
    //  {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //     is_deleted: true
    //     }),
    //      })
    //      .then(response => response.json())
    //      .then(json => console.log(json))
    //  }



    return (

        <ListGroup>
            {items}
        </ListGroup>
    )

}
export default InventoryList;