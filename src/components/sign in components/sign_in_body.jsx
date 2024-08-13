import { VStack, HStack, Box, Text, useColorMode, Button } from "@chakra-ui/react";

import SignInTitles from "./sign_in_titles";
import SignInForm from "./sign_in_form";
import { useNavigate } from "react-router-dom";

const SignInBody = () => {
    return (
        <VStack w='100%' pb='50px'>
            <Box mt={{base:'16px', md:'30px'}} w='100%'>
                <SignInTitles />
            </Box>
            <Box mt={{base:'5px', md:'30px'}} w='100%'>
                <SignInForm />
            </Box>
            <Box mt={{base:'20px', md:'30px'}} w='100%'>
                <NeedAnAccount />
            </Box>
        </VStack>
    )
}

const NeedAnAccount = () => {

    const nav = useNavigate();

    const { colorMode } = useColorMode();

    const handleNavigate = () => {
        nav('/sign_up')
    }

    return (
        <HStack w='100%' justifyContent='center' color={colorMode === 'light' ? 'gray.700' : 'gray.400'} fontSize={{base:'14px', md:'16px'}}>
            <Text>
                Don't have an account?
            </Text>
            <Button fontSize={{base:'14px', md:'16px'}} _hover={{'bg':'none'}} color={colorMode === 'light' ? 'gray.700' : 'gray.400'} fontWeight='normal' p='0' variant='ghost'   tabIndex={0} textDecoration='underline' pointer='cursor' onClick={handleNavigate} cursor='pointer'>
                Sign up
            </Button>
        </HStack>
    )
}

export default SignInBody;