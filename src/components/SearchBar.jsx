import React, {useState} from 'react';
import s from './Estilos/Search.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { activador } from '../Redux/Actions';




export default function SearchBar({onSearch}) {
const error = useSelector(state => state.activador)
const repetida = useSelector(state => state.ciudadRepetida)
const ciudades = useSelector(state => state.ciudades)
const dispatch = useDispatch()

 const [input, setInput] = useState("")

 const handleInputChange = (e) =>{
    setInput(e.target.value)
    dispatch(activador(false))
   
     }


const submit = (e) => {
  e.preventDefault(); 
  onSearch(input)
   setTimeout(function(){
   
    setInput("");},2000)
   }

 
  return (<div className={s.search}>
    <form onSubmit={submit} >
    <div>
    <input className={s.input} id="inputSearch" type="text" placeholder='Ciudad...' onChange={handleInputChange} value={input}/>      
   {setTimeout}
   
   {error === true && input.length === 0 ? <p className={s.danger}>Por favor, ingrese una ciudad</p> : ""}    
   {ciudades.length === 3 && error && input.length > 0? <p className={s.danger}>Por favor, primero deseleccione una Ciudad</p> : ""}
   {error === true  && ciudades.length < 3 && input.length > 0 && repetida === false? <p className={s.danger}>No se encontró la ciudad</p> : ""}
   {ciudades.length !== 3 && repetida === true  && error  && input.length !== 0? <p className={s.danger}>Esta ciudad ya se encuentra seleccionada</p> : ""}
  
    </div>
    
    <input className={s.btn} type="submit" value="Buscar" />
    </form>
    
  </div>)
};