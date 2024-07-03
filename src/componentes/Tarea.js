import React from 'react';
import '../hojas-de-estilo/Tarea.css'
import { AiOutlineClose  } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className= {completada ? 'tarea-contenedor completada' : 'tarea-contenedor'} >
      <div 
      className= 'tarea-texto'
      onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
{/* in the icon className='tarea-icono' is working as a props value because is a react component */}
      <div 
      className= 'tarea-contenedor-iconos'
      onClick={() => eliminarTarea(id)}>
      <AiOutlineClose className= 'tarea-icono' /> 
      </div>
    </div>
  );
}

export default Tarea;