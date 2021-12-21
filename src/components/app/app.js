import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/CharacterPage'
import styled from 'styled-components'
import ErrorMessage from '../ErrorMessage'
import CharDetails from '../charDetails'
import ItemList from '../itemList'
import gotServices from '../../Services'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Books from '../pages/Books'
import Houses from '../pages/Houses';
import BooksItem from '../pages'


import './button.css'




const Button1 = styled.button`
background-color: rgb(43, 97, 199);
border: none;
color: white;
padding: 2px 2px;
text-align: center;
text-decoration: none;
display: inline-block;
width: 180px;
font-size: 30px;
`;
const Div1 = styled.div`
padding-top:20px
padding-bottom:20px
width:200px`
const Div2 = styled.div`
padding-bottom:20px
`



export default class App extends Component {
    state = {
        Random: true,
        error: false

    }
    gotServices = new gotServices()
    name = 'hide'

    componentDidCatch() {
        this.setState({
            error: true
        })
    }


    show = () => {
        this.setState(prevstate => ({ Random: !prevstate.Random }))
        if (this.state.Random) {
            return this.name = 'show'
        }
        else {
            return this.name = 'hide'
        }

    }


    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }
        const newRandomChar = this.state.Random ? <RandomChar /> : null
        const Butick = () => {

            return (
                <>
                    <Div1>
                        <Button1 onClick={this.show}>{this.name}</Button1>
                    </Div1>
                </>
            )
        }
        return (
            <Router>
            <div className="app">
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {newRandomChar}
                            <Butick onClick={this.state} />            
                        </Col>
                    </Row>
                    <Route path='/characters' component={CharacterPage}/>                         
                    <Route path='/Houses' component={Houses}/> 
                    <Route path='/Books' exact component={Books}/>  
                    <Route path='/Books/:id' render={({match})=>{
                        return <BooksItem bookId={match.params}/>}
                        } />
                </Container>
            </div>
            </Router>
        );
    };
}