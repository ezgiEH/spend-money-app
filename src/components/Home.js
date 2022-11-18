import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from './Header'
import Items from './Items'
import Reciples from './Reciples'

function Home() {
    return (

        <Container maxW={{ base: '1100px', md: '1100px'}}>
            <Header />
            <Items />
            <Reciples />
        </Container>

    )
}

export default Home