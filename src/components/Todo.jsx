import React, { useState } from 'react'
import Number from './inputnumber'

const Todo = ({addCantidad, todo3, precio,index , deleteTodo, cantidad}) => {
 
return (
    <>    
    <div className="list">
    <h3>{todo3}</h3>
    <p>Cantidad: {cantidad}</p> 
    <Number addCant={addCantidad} id={index}/> <button className="btn-delete" onClick={()=>deleteTodo(index)}>x</button>
    <h3>Precio:${precio}</h3>    
    </div>  
    </>
)
}
export default Todo 