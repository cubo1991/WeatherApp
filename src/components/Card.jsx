import React from 'react';
import s from './Estilos/Card.module.css'



export default function Card(props) {
  // acá va tu código
 

  return <div className={s.card}>    
   <h4 className={s.nombreCiudad}>{props.name}</h4>
   <button onClick={props.onClose} className={s.btn}> X </button>
      <div className={s.informacionTarjeta}>
      <h3 className={s.temp}>Temp. Mín.: <p>{props.min}</p></h3>
      <h3 className={s.temp}>Temp. Máx.: <p>{props.max}</p></h3>
   <button className={s.btnDestacada} onClick={props.destacar}> Detalles </button>   
          </div>
       
   

  </div>
};