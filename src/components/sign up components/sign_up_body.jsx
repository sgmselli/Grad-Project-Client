import { VStack, HStack, Box, Text, useColorMode, Button } from "@chakra-ui/react";

import SignUpTitles from "./sign_up_titles";
import SignUpForm from "./sign_up_form";
import { useNavigate } from "react-router-dom";

const SignUpBody = () => {
    return (
        <VStack w='100%' h='100%' pb='50px'>
            <Box mt={{base:'16px', md:'30px'}} w='100%'>
                <SignUpTitles />
            </Box>
            <Box mt={{base:'20px', md:'30px'}} w='100%'>
                <SignUpForm />
            </Box>
            <Box mt={{base:'20px', md:'30px'}} w='100%'>
                <HaveAnAccount />
            </Box>
        </VStack>
    )
}

const HaveAnAccount = () => {

    const nav = useNavigate();

    const { colorMode } = useColorMode();

    const handleNavigate = () => {
        nav('/sign_in')
    }

    return (
        <HStack fontSize={{base:'14px', md:'16px'}} w='100%' justifyContent='center' color={colorMode === 'light' ? 'gray.700' : 'gray.400'}>
            <Text>
                Don't have an account?
            </Text>
            <Button fontSize={{base:'14px', md:'16px'}} _hover={{'bg':'none'}} color={colorMode === 'light' ? 'gray.700' : 'gray.400'} fontWeight='normal' p='0' variant='ghost' tabIndex={0} textDecoration='underline' pointer='cursor' onClick={handleNavigate} cursor='pointer'>
                Sign in
            </Button>
        </HStack>
    )
}

export default SignUpBody;