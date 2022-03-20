import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function ListItem() {


  return (

    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      <Card.Body>
        <Card.Title>Iphone</Card.Title>
        <Button variant="primary">Ver equipos Iphone</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1583574333311-3a86605c76b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80" />
      <Card.Body>
        <Card.Title>Samsung</Card.Title>
        <Button variant="primary">Ver equipos Samsung</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1599497986334-a17a0d25b76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1537&q=80" />
      <Card.Body>
        <Card.Title>Motorola</Card.Title>
        <Button variant="primary">Ver equipos Motorola</Button>
      </Card.Body>
    </Card>
    </>
    

  )

}

export default ListItem