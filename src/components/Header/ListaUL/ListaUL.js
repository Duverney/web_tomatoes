import React, { Component } from 'react'

import ItemLI from './ItemLI/ItemLI'
import ItemLIDropDown from './ItemLIDropDown/ItemLIDropDown'


export default class ListaUL extends Component {
    render() {
        return (
            <ul>
                <ItemLI href='#home' content="Inicio" />
                <ItemLI href='#cabinas' content="Cabinas" />
                <ItemLI href='#sensores' content="Sensores" />
                <ItemLI href='#resumen' content="Resumen" />
                <ItemLI href='#about' content="Acerca del proyecto" />
                <ItemLIDropDown href='#dropdown' content='DropDown 1' />
            </ul>
        );
    }
}