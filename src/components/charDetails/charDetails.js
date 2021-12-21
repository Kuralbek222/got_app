import React, { Component } from 'react';
import './charDetails.css';
import gotServices from '../../Services'
import ItemList from '../itemList'

const Field =({char,field,label})=>{
    return (
            <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}
export {Field}

export default class CharDetails extends Component {
        constructor(props){
            super(props)
            this.state = {
                char: null,
            }
            this.selectorChar = this.props.charId
            Object.assign(this, this.selectorChar);
        }    
    gotServices = new gotServices()

 
    componentDidMount() {
        this.updateChar()
    }
    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.selectChar()
        }
    }   
    updateChar() {
        const charId = this.props.charId
        const getDat=this.props.getDat
        if (!charId) {
            return
        }
       getDat(charId)
            .then((char) => {
                this.setState({ char })
            })
    }
    selectChar(){
        const{charData}=this.props.charData
        this.setState({
            char: charData
        })
    }

   
    render() {
        if (!this.state.char) {
            return <span className='select-error'>Please select a character</span>
        }
        const{char} = this.state
        const { name } = char

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                {React.Children.map(this.props.children,(child,)=>{
                    return React.cloneElement(child,{char})
                })}
                </ul>
            </div>
        );
    }
}