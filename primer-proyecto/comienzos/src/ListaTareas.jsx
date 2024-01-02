import React from "react";
import { useState } from "react";
import Lista from "./componentes/listas/Lista.jsx";
import './estiloListaTarea.css'
import { v4 as uuidv4 } from 'uuid';

if(localStorage.getItem('miObjeto')){

    var tareasHacer = JSON.parse(localStorage.getItem('miObjeto'))

    
}else{

    var tareasHacer = [
        {
            id: '1',
            detalle: 'Este es el detalle',
            clase: true
        },
        {
            id: '2',
            detalle: 'Hola putos jaja como estan, a ver si me sale a la primera, ojala que si',
            clase: false
        },
        {
            id: '3',
            detalle: 'Tengo que comprar leche para la nevera nueva',
            clase: false
        },
        {
            id: '4',
            detalle: 'Aqui no se que poner Xd',
            clase: true
        }
    ]

}



const ListaTareas = _ =>{

    // estado del objeto(datos de las listas)
    let [estadoLista , setEstadoLista] = useState(tareasHacer)


    // estado para el value del input
    var [estadoInput, setEstadoInput] = useState('') 


    // cambia la 'clase' del objeto 'tareasHacer'
    const handelEstado = (id) => {

        // setea el estado
        setEstadoLista((prevDatos) => {

          // mapeamos los datos
          const nuevoEstado = prevDatos.map((objeto) => {

            // si encontramos el id que nos pasaron
            if (objeto.id === id) {
              // verificamos que si la clase es true o false
              return { ...objeto, clase: !objeto.clase };
            }

            // retornamos todo el objeto
            return objeto;

          });
      
          guardarLocal(nuevoEstado);
          return nuevoEstado;
          
        });
      };


    // AGREGAMOS LA TAREA AL OBJETO 
    const agregarTarea = _ =>{
        
        // agremaos la tarea al estado
        estadoLista.unshift({id:uuidv4(), detalle: estadoInput, clase: true})

        // reseteamos el estado para que el value de el input se limpie
        setEstadoInput('')

        guardarLocal(estadoLista)
    }


    // funcion para agregar el objeto a el local storage
    const guardarLocal = objeto => {
        localStorage.setItem('miObjeto', JSON.stringify(objeto))
        console.log('guardado')
    }



    return (
        <>
            <h1>Lista de tareas</h1>

            <div className="contenedorListaDeTareas">

                <div className="contenedorInputAgregar">
                    <input type="text" value={estadoInput} placeholder="Ingresa tu tarea" onChange={ e => setEstadoInput(e.target.value)}/>
                    <button onClick={agregarTarea}  className="botonAgregarTarea">Agregar</button>
                </div>


                {
                    estadoLista.map(tarea => {
                        return(
                            <Lista 
                                key={tarea.id} 
                                detalle={tarea.detalle} 
                                clase={tarea.clase ? '' : 'realizado'} 
                                accion={ _ => handelEstado(tarea.id)}  //
                            />
                        )
                    })
                }
            </div>
        </>
    )



    
}



export default ListaTareas