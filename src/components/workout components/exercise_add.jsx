import { Button, HStack, Text, useColorMode } from "@chakra-ui/react"
import { IoAddCircleOutline } from "react-icons/io5";
    
const Add_Exercise_Button = () => {

    const { colorMode } = useColorMode();

    return (
        <Button
            bg='blue.400'
            cursor='pointer'
            _hover={{'bg':'blue.500', 'transform':'scale(0.99)'}}
            h='70px'
            w='100%'
            pl='0'
            pr='0'
        >
            <HStack w='100%' p='0 35px 0 30px' justifyContent='space-between' alignItems='center' color='white'  >
                <Text fontSize={{base: '15px', md:'17px'}} className="rubik">Add Exercise</Text>
                <IoAddCircleOutline size='24px' />
            </HStack>
        </Button>
    )
}

export default Add_Exercise_Button;