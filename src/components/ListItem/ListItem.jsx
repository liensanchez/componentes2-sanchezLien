import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'



function ListItem({greeting}) {
  const [productos, setProductos]=useState(0)

  //let productos=0

  const sumaProductos =()=>{

    //productos ++

    //console.log(productos)


    if (productos==10){

      setProductos(productos+0)

    }else{

      setProductos(productos+1)
      
    }

  } 

  const restaProductos=()=>{

    setProductos(productos-1)

  }

  return (

    <>

    <h2>{greeting} </h2>

    <button onClick={restaProductos}>-1</button>

    <label>{productos} </label>

    <button onClick={sumaProductos}>+1</button>

    </>
    

  )

}

export default ListItem