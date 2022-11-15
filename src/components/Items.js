import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Item from './Item'

function Items() {
    const items = useSelector((state) => state.spend.items)
    return (
        <SimpleGrid minChildWidth='200px' spacing='40px'>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </SimpleGrid>
    )
}

export default Items