import { useEffect, useState } from 'react'
import {
    Box,
    Image,
    Stack,
    Text,
    Input,
    Button,
} from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux'
import { updateBudget } from '../redux/Spend/SpendSlice'

function Item({ item }) {
    const [count, setCount] = useState(0)
    const [salable, setSalable] = useState("disabled")
    const [buyable, setBuyable] = useState("")

    const budget = useSelector((state) => state.spend.budget);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateBudget({ id: item.id, count: count }))
    }, [count, item.id])


    const handleBuy = () => {
        setCount(count + 1)
    }

    const handleSell = () => {
        setCount(count - 1)
    }


    useEffect(() => {
        if (count > 0) {
            setSalable("");
        } else {
            setSalable("disabled");
        }
    }, [count]);



    useEffect(() => {

        if (item.productPrice > budget) {
            setBuyable("disabled");
        } else {
            setBuyable("");
        }

    }, [budget, item.productPrice])

    const handleChange = (value) => {
        const maxCount = Math.floor(budget / item.productPrice) + count;
        if (value && value > 0) {
            if (value > maxCount && budget >= 0) {
                setCount(maxCount);
            } else {
                setCount(value);
            }
        } else {
            setCount(0);
        }
    }

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
                <Stack mt={8} direction={'row'} spacing={4}>
                    <Input textAlign={"center"} value={item.count} htmlSize={2} width='auto' variant='filled'
                        onChange={(e) => handleChange(e.target.value)} />
                </Stack>
            </Stack>
            <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                    disabled={salable}
                    onClick={handleSell}
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    _focus={{
                        bg: 'gray.200',
                    }}>
                    SELL
                </Button>
                <Button
                    disabled={buyable}
                    onClick={handleBuy}
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}>
                    BUY
                </Button>
            </Stack>
        </Box>
    )
}

export default Item
