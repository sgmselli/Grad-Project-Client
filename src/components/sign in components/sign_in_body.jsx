import { VStack, HStack, Box, Text, useColorMode } from "@chakra-ui/react";

import Sign_In_Titles from "./sign_in_titles";
import Sign_In_Form from "./sign_in_form";
import { useNavigate } from "react-router-dom";

const Sign_In_Body = () => {
    return (
        <VStack w='100%' pb='50px'>
            <Box mt={{base:'16px', md:'30px'}} w='100%'>
                <Sign_In_Titles />
            </Box>
            <Box mt={{base:'5px', md:'30px'}} w='100%'>
                <Sign_In_Form />
            </Box>
            <Box mt={{base:'20px', md:'30px'}} w='100%'>
                <Need_An_Account />
            </Box>
        </VStack>
    )
}

const Need_An_Account = () => {

    const nav = useNavigate();

    const { colorMode } = useColorMode();

    const handleNavigate = () => {
        nav('/sign_up')
    }

    return (
        <HStack w='100%' justifyContent='center' color={colorMode === 'light' ? 'gray.700' : 'gray.400'} fontSize='16px'>
            <Text>
                Don't have an account?
            </Text>
            <Text textDecoration='underline' pointer='cursor' onClick={handleNavigate} cursor='pointer'>
                Sign up
            </Text>
        </HStack>
    )
}

export default Sign_In_Body;