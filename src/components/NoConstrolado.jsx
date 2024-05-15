import { useRef, useState } from "react";

const NoConstrolado = () => {

    const form = useRef(null)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("")
        
        //obtiene la info del form, importante ponerle el atributo "name" parqa que capture el elemnto
        const data = new FormData(form.current)
        //console.log([...data.entries()])

        // transformamos la data en un objeto y en segundo paso desestructuramos
        let dataObjet = Object.fromEntries([...data.entries()])
        const {title, description, state} = dataObjet
        
        
        //validar datos
        if (!title.trim() || !description.trim() || !state.trim()) return setError("Llena todos los campos")
        
        
        //enviar datos
        console.log(title, description, state)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} ref={form}>
            <input 
                type="text" 
                placeholder="Ingrese Todo"
                className="form-control mb-2"
                name="title"
            />
            <textarea 
                className="form-control mb-2"
                placeholder="Ingrese descripcion"    
                name="description"
            />
            <select className="form-control mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
            { error !== "" && error}
        </form>
    )
};

export default NoConstrolado