import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import ItemList from '../../itemList'
import CharDetails,{Field} from '../../charDetails'
import ErrorMessage from '../../ErrorMessage'
import gotServices from '../../../Services'
import RowBlock from '../../RowBlock'



export default class Houses extends Component {
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

        const Houseslist =(
            <ItemList onItemSelected={this.onItemSelected}
            getData={this.gotServices.getAllHouses}
            renderItem={(item)=>item.name}
            />         
            )
            

        const charDetails = (
            <CharDetails charId={this.state.charId} 
            charData={this.state} 
            getDat={this.gotServices.getHouse}>                          
                <Field field='name' label='Name'/>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
            </CharDetails>

        )       
        return (
            <RowBlock left={Houseslist} right={charDetails}/>
        )
    }
}
