import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Titulo from '../components/Titulo/Titulo';
import ListItem from '../components/ListItem/ListItem'


function RoutesApp() {

  return (

    <>

     
      <NavBar/>

      <Titulo 
        tituloProps='soy titulo de app' 
        subtituloProps='soy subtitulo de app' 
      /> {/*Extremadamente modular y dinamico porque directamente lo hice una sola vez */}
      {/*tmb se puede poner como Titulo()*/}

      <ListItem greeting='List item'/>
    </>
  )

}

export default RoutesApp