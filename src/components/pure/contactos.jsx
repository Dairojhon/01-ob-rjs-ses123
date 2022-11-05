import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EstadoContactos from './estadoContactos';


class Contactos extends Component {

    constructor (props) {
        super(props);
        this.state = {}
    }

    render() {        
        return (
            <div>
                <div>
                    <h2>el usuario: { this.props.nombre }, { this.props.apellido }</h2>
                    <h2>con email: { this.props.email }</h2>
                </div>
                <div>
                    <EstadoContactos estado={ this.props.conectado }></EstadoContactos>
                </div>
            </div>
        );
    }
}


Contactos.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool

};


export default Contactos;
