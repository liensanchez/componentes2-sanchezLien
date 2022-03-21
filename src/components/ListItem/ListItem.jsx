import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function ListItem({greeting}) {


  return (

    <>
    <h2>{greeting} </h2>
    </>
    

  )

}

export default ListItem