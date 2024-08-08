import { HStack, Text, useColorMode } from "@chakra-ui/react"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Back_Button = () => {

    const nav = useNavigate();

    const handleBack = () => {
        nav(-1);
    }

    const { colorMode } = useColorMode()

    return (
        <HStack onClick={handleBack} cursor='pointer' _hover={{'textDecoration':'underline'}} color={colorMode === 'light' ? 'gray.700' : 'gray.400'} gap='8px'  alignItems='center' pl='2px'>
            <IoArrowBackCircleOutline size='17px' />
            <Text
                pt='0px'
                fontSize='16px'
                className='rubik'
            >
                Back</Text>
        </HStack>
    )
}

export default Back_Button