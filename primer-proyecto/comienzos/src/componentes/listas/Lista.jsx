import React from "react";
import { useState } from "react";
import equis from "../../imagenes/iconos/boton-x.png"
import eliminar from "../../imagenes/iconos/eliminar.png"
import './estiloLista.css'



const Lista = ({accion, clase,detalle, accionEliminar}) => {

    return(
        <>
            <div className={`lista ${clase}`}>
                {detalle}
                <div className="contenedorImagenLista">
                    <img onClick={accion} src={equis} alt="" />
                    <img onClick={accionEliminar} src={eliminar} alt="" />
                </div>
            </div>
        </>
    )
}

export default Lista