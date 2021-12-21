import React, { Component } from 'react'
import gotServices from '../../Services'
import CharDetails,{Field} from '../charDetails'

export  default class BooksItem extends Component {
    constructor(props){
        super(props)
     
    }

    render(){
       const {getBook} = new gotServices()
        return (
            <CharDetails charId={2} getDat={getBook}>
            <Field field='name' label='Name'/>
            <Field field='publisher' label='Publisher'/>
            <Field field='numberOfPages' label='NumberOfPages'/>
            <Field field='released' label='Released'/>
        </CharDetails>
        )
    }
}