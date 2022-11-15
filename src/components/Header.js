import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import {useSelector } from 'react-redux'

function Header() {
  const budget = useSelector((state) => state.spend.budget)
  return (
   <Box bg={'white'} width={1000}>
    <Image p={10}
    borderRadius={50}
    boxSize='100px'
    objectFit='cover'
    src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg'
    alt='Dan Abramov'
/>
<h1>Spend Elon Money</h1>
<h2>{budget} $</h2>
</Box>
  )
}

export default Header