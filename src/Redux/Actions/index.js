
export const BUSCAR_CIUDAD = "BUSCAR_CIUDAD";
export const ACTIVADOR = "ACTIVADOR"
export const CIUDAD_REPETIDA = "CIUDAD_REPETIDA"
export const ELIMINAR_CIUDAD = "ELIMINAR_CIUDAD"
export const ELIMINAR_DESTACADA = "ELIMINAR_DESTACADA"
export const AGREGAR_DESTACADA ="AGREGAR_DESTACADA"


export const searchCity = (payload) => {
    return {type: BUSCAR_CIUDAD, payload: payload}
}

export const activador = (payload) => {
    return {type: ACTIVADOR, payload}
}
export const ciudadRepetida = (payload) => {
    return {type: CIUDAD_REPETIDA, payload}
}
export const eliminarCiudad = (id) => {
    return {type: ELIMINAR_CIUDAD, payload:id }
}
export const eliminarDestacada = (id) => {
    return {type: ELIMINAR_DESTACADA, payload:id }
}
export const agregarDestacada = (payload) => {
    return {type: AGREGAR_DESTACADA, payload}
}