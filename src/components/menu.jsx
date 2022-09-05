import React, {useState} from "react";
import Todo from "./Todo";
import Number from "./inputnumber";


const Categorias= [
    {
        nombre: "Manzana",
        Precio:"0.50",
        
    },
    {
        nombre: "Banana",
        Precio:"1.00",
    },
    {
        nombre: "Pera",
        Precio:"0.55",
    },
    {
        nombre: "Jamón",
        Precio:"2.75",
    },
    {
        nombre: "Tomates",
        Precio:"1.17",
    },
    {
        nombre: "Pechuga de Pollo",
        Precio:"1.97",
    },
    {
        nombre: "Atún",
        Precio:"2.20",
    },
    {
        nombre: "Leche entera",
        Precio:"2.99",
    },
    {
        nombre: "Lomo rollizo",
        Precio:"6.35",
    },
    {
        nombre: "Agua",
        Precio:"0.75",
    }
    ]
            
function Menu() {
    
    const [idarticulos, setidarticulos]=useState(-1);
    const [suma,setSuma]=useState([]);
    const [todo, setTodos]=useState    
    (
        [         
        ]
    )  
    
    const handlerCargarArticulos= function (e) {        
        const opcion= e.target.value;                          
        setidarticulos(opcion);
    }
    const deleteTodo = id =>{
        const tempTodos = todo.filter(element => element.id != id);
        setTodos(tempTodos);
        setSuma(tempTodos.map(element => (element.precio*element.cantidad)))
    }

    const handleClick= function(e){ 
        if(idarticulos===-1)
        {
            console.log("Seleccionar una opción")
            console.log(idarticulos);        
        }else
        {   
            let articulo = {
                id: idarticulos,
                nombre: Categorias[idarticulos].nombre,
                precio: Categorias[idarticulos].Precio,
                cantidad: 1
            }
            
            if(todo.length >= 0){
                const found = todo.find(element => element.id == articulo.id);
                if(found === undefined){
                    setTodos([...todo, articulo]);
                    setSuma([...suma, (parseFloat(articulo.precio)*parseInt(articulo.cantidad))]);
                }else{
                    alert("Este articulo ya fue añadido.");
                }
            }else{
                setTodos([...todo, articulo]);
                setSuma([...suma, (parseFloat(articulo.precio)*parseInt(articulo.cantidad))]);
            }
        }
    } 

    const handleAddCant = (cantidad, id) => {
        const tempTodo = todo.map((item) => {
            if(item.id == id){
                item.cantidad = cantidad;
            }

            return item;
        })

        setSuma(tempTodo.map(element => (element.precio*element.cantidad)))
        setTodos(tempTodo);
    }
    
    return(
        <div className="">
            <div className="">                
                <select name="categorias" id="selCategorias" onChange={handlerCargarArticulos}>
                    <option value={-1}>Seleccione una opción</option>
                    {                        
                        //Se mapea el JSON con los datos
                        Categorias.map((item, i)=>(
                            <option key={"categoria"+i} value={i}>{item.nombre}</option>                            
                        ) )                        
                    }
                </select>
                <button onClick={handleClick}>Agregar</button>
            </div>
            <div>
                {                       
                    todo.map((item, i)=>(<Todo addCantidad={handleAddCant} todo3={item.nombre} precio={item.precio} cantidad={item.cantidad} inputnumber={<Number />} key={i} index={item.id} deleteTodo={deleteTodo} />))                    
                }
            </div>        
            <div className="">
                <p>Total: ${suma.reduce((a,b) => a + b, 0).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Menu;