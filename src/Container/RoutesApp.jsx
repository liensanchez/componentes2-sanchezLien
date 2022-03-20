import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Titulo from '../components/Titulo/Titulo';
import ListItem from '../components/ListItem/ListItem'


let titulo='soy titulo dinamico' //las variables son estados, solo presentan datos

let subtitulo='subtitulo hola'


function RoutesApp() {

  return (

    <>

     
      <NavBar/>

      <Titulo tituloProps={titulo} subtituloProps={subtitulo} /> {/*Extremadamente modular y dinamico porque directamente lo hice una sola vez */}
      {/*tmb se puede poner como Titulo()*/}

      <ListItem/>
    </>
  )

}

export default RoutesApp