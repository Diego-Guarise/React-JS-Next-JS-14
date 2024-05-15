import { useState } from "react";
import Swal from "sweetalert2";


const Formulario = ({addTodo}) => {

    const [todo, setTodo] = useState ({
        title: 'Todo #01',
        description: 'Description #01',
        state: 'pendiente',
        priority: false
    })

    const [error, setError] = useState(false)

    //desestructuracion de todo para evitar poner "todo.____"
    const {title, description, state, priority} = todo

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y descripcion obligatorios!',
                //footer: '<a href="">Why do I have this issue?</a>'
            })
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: state === 'completado' ? true : false
        })

        return Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Todo agregado correctamente!',
            showConfirmButton: false,
            timer: 1500,
            //footer: '<a href="">Why do I have this issue?</a>'
        })
    }

    const PintarError = () => {
        return <div className="alert alert-danger">Todos los campos obligatorios</div>
    }

    const handleChange = e => {
        //desectructuro el e.target._____
        const {name, type, checked, value} = e.target

        //copiamos el "todo" y modificamos el valor correspondiente a cada campo, con el input que estamos escribiendo
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    return (
        <div className="container mt-2">
            <h1>Formularios</h1>
            {error && <PintarError/>}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    className="form-control mb-2"
                    type="text" 
                    placeholder="Ingrese Todo"
                    name="title"
                    value={title}
                    //obtengo los datos a medida que se llenan los campos
                    onChange={handleChange}
                />
                <textarea 
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese descripcion"
                    name="description"
                    value={description}
                    //obtengo los datos a medida que se llenan los campos
                    onChange={handleChange}

                />
                <div className="form-check mb-2">
                    <input 
                        className="form-check-input"
                        type='checkbox'
                        name='priority'
                        id="inputCheck"
                        checked={priority}
                        onChange={handleChange}
                        />
                    <label htmlFor="inputCheck">Dar prioridad</label>
                    

                </div>
                <select 
                    className="form-control mb-2" 
                    name="state" 
                    value={state} 
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    )
};

export default Formulario