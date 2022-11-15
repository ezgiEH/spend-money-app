import React from 'react'
import {
    Box,
    Image,
    Stack,
    Text,
    Button,
} from '@chakra-ui/react'

function Item({ item }) {
    return (
        <Box boxShadow={'2xl'} bg={"white"}
            rounded={'md'} h={'auto'} p={10}>
            <Stack align={'center'} >
                <Image boxSize={180} objectFit='fill' src={item.image} alt={item.name} />
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {item.productName}
                </Text>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                        {item.productPrice} $
                    </Text>
                </Stack>
                <Stack direction={'row'} align={'center'}>
                    <Button colorScheme='teal' variant='solid' px={6}>SELL</Button>
                    <Text fontWeight={600} fontSize={'xl'}>
                        {item.count}
                    </Text>
                    <Button  colorScheme='teal' variant='outline' px={6}>BUY</Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Item
