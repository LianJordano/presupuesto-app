import React, { Fragment, useState } from 'react'
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //Definir state

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Funcion que lee el presupuesto

    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    //Submit para definir el presupuesto

    const agregarPresupuesto = (e) =>{
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        
        //validacion Ok
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }


    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            
            { error ? <Error mensaje="El presupuesto es incorrecto" /> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto}
                >
                </input>

                <input
                    type="submit"
                    className='button-primary u-full-width'
                    value="Definir presupuesto"
                >
                </input>
            </form>
        </Fragment>

    );
}
 
export default Pregunta;