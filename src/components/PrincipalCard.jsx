import React from 'react';
import s from './Estilos/PrincipalCard.module.css'



export default function Card(props) {
  // acá va tu código
 console.log(props)

  return <div className={s.card}>    
   <h4 className={s.nombreCiudad}>{props.name}</h4>
   <button onClick={props.onClose} className={s.btn}> X </button>
      <div className={s.informacionTarjeta}>
      <h2 className={s.temp}>Temperatura: <p>{props.temp}</p></h2>
      <h3 className={s.temp}>Temp. Mín.: <p>{props.min}</p></h3>
      <h3 className={s.temp}>Temp. Máx.: <p>{props.max}</p></h3>
      <h3 className={s.temp}>Nubosidad: <p>{props.wind}km/h</p></h3>
      <h3 className={s.temp}><p>{props.weather}</p></h3>
      
      
      {/* <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Ciudad"></img> */}
          </div>
       
   

  </div>
};