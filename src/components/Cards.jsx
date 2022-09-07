import React from 'react';
import Card from './Card';
import s from './Estilos/Cards.module.css'


export default function Cards({cities, onClose, destacar}) {
  // acá va tu código
  // tip, podés usar un map
  // console.log(props)


 
 
  return (<div>
    
<div id='tarjetas' className={s.divCiudades}> {cities.map((ciudades) => <Card
  max={ciudades.max}
  min={ciudades.min}
  name={ciudades.name}
  img={ciudades.weather[0].icon}
  onClose={() => onClose(ciudades.id)}
  destacar={()=> destacar(ciudades.id)}
  key= {ciudades.id}
  />)}</div> 
  </div>)
}