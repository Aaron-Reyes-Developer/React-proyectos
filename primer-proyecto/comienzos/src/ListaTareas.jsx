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


    // eliminar lista
    const eliminarLista = id_eliminar =>{
        
        // como 'setEstadoLista'  es una funcion asincrona, para guarl el objeto en el local, se tiene que 
        // hacer una funcion para recorrer el objeto (retornando un objeto nuevo pero sin el dato que ecluimos)
        setEstadoLista( datosPrevios => {
            let nuevoEstado = datosPrevios.filter(objeto => objeto.id !== id_eliminar)
            guardarLocal(nuevoEstado)
            return nuevoEstado
        })
        
    }



    // funcion para agregar el objeto a el local storage
    const guardarLocal = objeto => {
        localStorage.setItem('miObjeto', JSON.stringify(objeto))
    }



    return (
        <>
            <div className="contendorTitulo" style={{marginBottom: '1rem'}}>
                <h1 style={{marginBottom: '0'}}>Lista de tareas ({estadoLista.length})</h1>
                <span style={{color: '#A5A5A5'}}><i>Usa el localStorage para gardar la lista</i></span>
            </div>

            <div className="contenedorListaDeTareas">

                <form className="contenedorInputAgregar" onSubmit={e => e.preventDefault()}>
                    <input type="text"  value={estadoInput} placeholder="Ingresa tu tarea" onChange={ e => setEstadoInput(e.target.value)} />
                    <button onClick={agregarTarea}  className="botonAgregarTarea">Agregar</button>
                </form>


                {
                    estadoLista.map(tarea => {
                        return(
                            <Lista 
                                key={tarea.id} 
                                detalle={tarea.detalle} 
                                clase={tarea.clase ? '' : 'realizado'} 
                                accion={ _ => handelEstado(tarea.id)}  
                                accionEliminar = {_ => eliminarLista(tarea.id)}
                            />
                        )
                    })
                }
            </div>
        </>
    )



    
}



export default ListaTareas