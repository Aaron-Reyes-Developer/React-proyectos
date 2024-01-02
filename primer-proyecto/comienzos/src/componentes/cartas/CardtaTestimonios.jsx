import React from "react";
import { useState } from "react";
import "./estiloCartaTestimonios.css"

const Testimonios = props => {

    let [estado, setEstado] = useState('inactivo')

    return (

        <div  className={`contenedorCartaTestimonio ${estado}`} onClick={handelActivo} >

            <div className="contenedorImagen"> <img title={props.titulo} src={props.imagen}/> </div>

            <div className="contenedorTexto">
                <h2>{props.titulo}</h2>
                <span>{props.subTitulo}</span>
                <p>{props.detalle}</p>
            </div>

        </div>

    )

    function handelActivo (){
        
        if(estado === 'inactivo'){
            setEstado('activo')
        }else{
            setEstado('inactivo')
        }

    }
    

}




export default Testimonios