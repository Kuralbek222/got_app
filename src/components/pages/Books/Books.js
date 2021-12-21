import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import ItemList from '../../itemList'
import CharDetails,{Field} from '../../charDetails'
import ErrorMessage from '../../ErrorMessage'
import gotServices from '../../../Services'
import RowBlock from '../../RowBlock'



export default class Books extends Component {
    state = {
        charId: 2,
         charData: {},
        error: false
    }
    
    gotServices = new gotServices()

    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    
    onItemSelected = (id,item) => {
        this.setState({
            charId: id,
            charData: item
        })
    }
    render() {
        if (this.state.error) {
            return <ErrorMessage /> 
        }

        const BookList =(
            <ItemList onItemSelected={this.onItemSelected}
            getData={this.gotServices.getAllBooks}
            renderItem={(item)=>item.name}/>
            )
               
        const Field2 = (
            <CharDetails charId={this.state.charId} 
            charData={this.state} 
            getDat={this.gotServices.getBook}> 
        <Field field='name' label='Name'/>
        <Field field='publisher' label='Publisher'/>
        <Field field='numberOfPages' label='NumberOfPages'/>
        <Field field='released' label='Released'/>
    </CharDetails>
        )
        return (
          <RowBlock left={BookList} right={Field2}/>
        )
    }
}


