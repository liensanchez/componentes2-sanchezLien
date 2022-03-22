import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function ListItem({greeting}) {

 let productos= 0

 const sumaProductos =()=>{

    productos ++

    console.log(productos)
 }

  return (

    <>

    <h2>{greeting} </h2>

    <label>{productos} </label>

    <button onClick={sumaProductos}>+1</button>

    </>
    

  )

}

export default ListItem