import React, { useState } from 'react';
import PropTypes from 'prop-types';


const EstadoContactos = (props) => {

    const [estado, setEstado] = useState(props.estado);

    const cambioEstado = () =>{
        setEstado(!estado)
    }

    
    return (
        <div>
            <div>
                <h2>se encuentra { estado ? 'Contacto En Línea' : 'Contacto No Disponible' }</h2>
            </div>
            <div>
                <button onClick={ cambioEstado }>Conectado / Desconectado</button>
            </div>
        </div>
    );
};


EstadoContactos.propTypes = {
    estado: PropTypes.bool

};


export default EstadoContactos;
