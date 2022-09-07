import React from 'react';
import PrincipalCard from './PrincipalCard';
import s from './Estilos/Cards.module.css'


export default function PrincipalCardContainer({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map



 
 
  return (<div>
    
<div id='tarjetas' className={s.divCiudades}> {cities.map((ciudades) => <PrincipalCard
  max={ciudades.max}
  min={ciudades.min}
  name={ciudades.name}
  img={ciudades.weather[0].icon}
  wind={ciudades.wind}
  clouds={ciudades.clouds}
  temp={ciudades.temp}
  weather={ciudades.weather}
  onClose={() => onClose(ciudades.id)}
  key= {ciudades.id}
  />)}</div> 
  </div>)
}