import React, { Component } from 'react';
import './randomChar.css';
import gotServices from '../../Services'
import Spinner from '../spinner'
import ErrorMessage from '../ErrorMessage'

export default class RandomChar extends Component {

    gotServices = new gotServices()
    state = {
        char: {},
        loading: true,
        error: false
    }
    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25) //25 - 140
        // const id = 100000000000
        this.gotServices.getCharacter(id)
            // .then((res) => console.log(res.name))
            .then(this.onCharLoaded)
            .catch(this.onError)
    }
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }
    componentDidMount() {
        this.updateChar()
        this.timerId = setInterval(this.updateChar, 3000)
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    render() {
        const { char, loading, error } = this.state

        const ErrMessage = error ? <ErrorMessage /> : null

        const spinner = loading ? <Spinner /> : null
        const content = !(loading || error) ? <View char={char} /> : null


        return (
            <div className="random-block rounded">
                {ErrMessage}
                {content}
                {spinner}
            </div>
        );
    }
}
const View = ({ char }) => {
    const { name, gender, born, died, culture } = char
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}
