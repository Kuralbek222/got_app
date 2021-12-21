import React from 'react'
import './errorMessage.css'
import styled from 'styled-components'

const ErrorMessage = () => {
    const Img = styled.img`
    position: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    `
    return (
        <div>
            <Img src={process.env.PUBLIC_URL + '/img/Error.jpg'} alt='error'></Img>
            <span>Something wrong</span>
        </div>
    )
}

export default ErrorMessage