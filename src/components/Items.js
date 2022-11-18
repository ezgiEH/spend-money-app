import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Item from './Item'

function Items() {
    const items = useSelector((state) => state.spend.items)
    return (
        <SimpleGrid p={4} minChildWidth='240px' spacing='20px' >
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </SimpleGrid>
    )
}

export default Items