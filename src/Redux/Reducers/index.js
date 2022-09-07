import { ELIMINAR_DESTACADA } from "../Actions";
export const BUSCAR_CIUDAD = "BUSCAR_CIUDAD";
export const ACTIVADOR = "ACTIVADOR";
export const CIUDAD_REPETIDA = "CIUDAD_REPETIDA"
export const ELIMINAR_CIUDAD = "ELIMINAR_CIUDAD"
export const AGREGAR_DESTACADA ="AGREGAR_DESTACADA"

const initialState = {
    ciudadDestacada: [],
    ciudades: [],
    IDCiudad:[],
    activador: false,
    ciudadRepetida: false
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
       case BUSCAR_CIUDAD:
       
        return{...state, ciudades: state.ciudades.concat(action.payload), IDCiudad: state.IDCiudad.concat(action.payload.id), ciudadDestacada: action.payload}
        case ACTIVADOR:
        return {...state, activador: action.payload}       
        case CIUDAD_REPETIDA:
            return {...state, ciudadRepetida: action.payload}
            case ELIMINAR_CIUDAD:
                return {...state, ciudades: state.ciudades.filter(ciudad => ciudad.id !== action.payload), IDCiudad: {}}
                case ELIMINAR_DESTACADA:
                    return {...state, ciudadDestacada: []}
                    case AGREGAR_DESTACADA:
                        return{...state, ciudadDestacada: action.payload}
            
        default: return state
       
    };
};

export default reducer;
