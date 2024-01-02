import React from "react";
import './estiloBoton.css'

const Boton = ({texto, miFuncion, estado, icono}) =>{
    return(
        <button className={`botonAccion ${estado}`} onClick={miFuncion}>
            {texto}
            <img src={icono} alt={texto} />
        </button>
    )
}

export default Boton