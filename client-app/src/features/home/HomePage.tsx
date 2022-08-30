import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <Container>
            <h1>Home Page</h1>
            <h3>Go to <Link to='/events'>Events</Link></h3>
        </Container>
    )
}

export default HomePage