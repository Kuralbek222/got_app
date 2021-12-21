import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import ItemList from '../../itemList'
import CharDetails,{Field} from '../../charDetails'
import ErrorMessage from '../../ErrorMessage'
import gotServices from '../../../Services'
import RowBlock from '../../RowBlock'



export default class CharacterPage extends Component {
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
        const itemList = (       
            <ItemList onItemSelected={this.onItemSelected} 
            getData={this.gotServices.getAllCharacters}
            renderItem={({name,gender})=>`${name} (${gender})`}
          />       
        )

        const charDetails = (
            <CharDetails charId={this.state.charId}
             charData={this.state}
              getDat={this.gotServices.getCharacter
          
            }>              
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </CharDetails>
        )
  
        
        
        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}

