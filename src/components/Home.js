import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from './Header'
import Items from './Items'
import Reciples from './Reciples'

function Home() {
    return (
        <div className="App">
            <Container p={20} width={1000}>
                <Header />
                <Items />
                <Reciples />
            </Container>
        </div>
    )
}

export default Home