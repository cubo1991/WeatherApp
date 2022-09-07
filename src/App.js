import React, { useState } from 'react';
import s from './App.module.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav'
import PrincipalCard from './components/PrincipalCardContainer';
import {activador, agregarDestacada, ciudadRepetida, eliminarCiudad, eliminarDestacada, searchCity} from './Redux/Actions/index'

function App() {
  const dispatch = useDispatch()
   function destacada (id){
    let nuevaCiudad = cities.filter(c => c.id === id)
   setCiudadPrincipal(nuevaCiudad)
    

   
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
    setCiudad(oldCities => oldCities.filter(c => c !== id))
    dispatch(activador(false))
    dispatch(eliminarCiudad(id))
  }
  function onClosePrincipal(id) {
       setCiudadPrincipal(oldCities => oldCities.filter(c => c.id !== id))
       dispatch(eliminarDestacada())
  }

  const apiKey = 'f1b22a79e917ecbd4848f8000f09a282'
  const [cities, setCities] = useState([])
  const [ciudad, setCiudad] = useState([])
  const [ciudadPrincipal, setCiudadPrincipal] = useState ([])
 
 
  let seleccionador = Object.values(ciudad)
 
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
       .then(r => r.json())
      .then((recurso) => {
        
        if (cities.length <= 2) {
          if(seleccionador.includes(recurso.id)){ /*alert("Esta Ciudad ya esta")*/dispatch(ciudadRepetida(true));  dispatch(activador(true))  } else {
            dispatch(activador(false))
            dispatch(ciudadRepetida(false))
          if (recurso.main !== undefined) {
           
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon.replace(/[ '"]+/g, ' '),            
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setCiudad(oldCities => [...oldCities, ciudad.id])
            setCities(oldCities => [...oldCities, ciudad]);
            setCiudadPrincipal([ciudad])
            dispatch(agregarDestacada([ciudad]))
            dispatch(searchCity(ciudad))
           } else {
            // alert("Ciudad no encontrada")
            dispatch(activador(true));
        
          }}
        } else {
          
          dispatch(activador(true))
        }
      })

  }
  
  return (
    <div className={s.app}>
      <nav className={s.header}>
        <Nav onSearch={onSearch} />
      </nav>

      <div>
        <PrincipalCard
        cities={ciudadPrincipal} 
        onClose={onClosePrincipal}/>
      </div>

      <div className={s.main}>
        <Cards
          cities={cities}
          onClose={onClose}
          destacar={destacada}
        />
      </div>


    </div>
  );
}

export default App;
