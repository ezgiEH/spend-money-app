import React from 'react'
import { Box, Image,Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

function Header() {
  const budget = useSelector((state) => state.spend.budget)
  return (
    <Box bg={'white'} align={"center"}>
      <Image p={4}
        borderRadius={50}
        boxSize='200px'
        objectFit='cover'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg'
        alt='Elon musk'
      />
      <Heading>Spend Elon Money</Heading>
    <Heading bg={"blue.400"} w={"-moz-fit-content"}>{budget} $</Heading>
    </Box>
  )
}

export default Header