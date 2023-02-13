import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState("");
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Cuando el usuario agrega un gasto

    const agregarGasto = (e) =>{
        e.preventDefault();

        //validar

        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ""){
            guardarError(true);
            return;
        }

        //construir gasto

        guardarError(false)

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        
        //pasarlo al componente principal

        guardarGasto(gasto);
        guardarCrearGasto(true);

        //resetear form

        guardarNombre("");
        guardarCantidad(0);
    }

    return ( 

        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" />  : null}

            <div className='campo'>
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className='u-full-width'
                    placeholder='Ej. transporte'
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='Ej. 200.000'
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className='button-primary u-full-width'
                value="Agregar gasto"
            />
            
        </form>
     
    );
}
 
export default Formulario;