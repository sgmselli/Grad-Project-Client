import { Flex, HStack, Text, Box, Button, useColorMode } from "@chakra-ui/react";
import Logo from "./logo";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth_context";

const Navbar = () => {

    const { colorMode } = useColorMode()
    
    return (
        <Flex 
            w='92%' 
            maxW='600px' 
            h='64px' 
            bg={colorMode === 'light' ? 'white' : 'rgba(66,66,83,26.67)' }
            // border='1px solid' 
            borderColor='gray.300' 
            borderRadius='12px'
            mt={{base:'18px', md:'28px'}}
            boxShadow={colorMode === 'light' ? '0px 2px 25px 0px #F1F1F1' : '0px' }
            >
                <HStack 
                    p='0 10px 0 20px' 
                    justifyContent='space-between'
                    w='100%'
                    >
                    <Box flex='1' w='100%'>
                        <Logo pixels={36} />
                    </Box>
                    <Flex justifyContent='center' flex='1' w='100%'>
                        <Title />
                    </Flex>
                    <Flex justifyContent='end' flex='1' w='100%'>
                        <ColorTheme />
                    </Flex>
                </HStack>
        </Flex>
    )
}

const ColorTheme = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Button
            onClick={toggleColorMode}
            _hover={ colorMode === 'light' ? {bg:'rgba(200, 200, 200, 0.3)'} : {bg:'rgba(160, 160, 160, 0.2)'}}
            color={colorMode === 'light' ? 'gray.700' : 'gray.300'}
            bg='none'
            w='44px'
            h='44px'
        >
            <Flex>

            {
                colorMode === 'light' ?
                <FaRegMoon size='20px' />
                :
                <FiSun size='20px' />
            }
            </Flex>

        </Button>
    )
}

const Title = () => {

    const { colorMode } = useColorMode()
    const { isAuthenticated } = useAuth();

    const nav = useNavigate();

    const handleNavigate = () => {
        if (!isAuthenticated || window.location.pathname === '/subscribe' || window.location.pathname === '/') {
            nav('/');
        } else {
            nav('/menu')
        }
    }

    return (
        <Button
            onClick={handleNavigate}
            _hover={ colorMode === 'light' ? {bg:'rgba(200, 200, 200, 0.3)'} : {bg:'rgba(160, 160, 160, 0.2)'}}
            bg='none'
            w='130px'
            h='44px'
        >
            <Text 
                className="rubik-bold"
                color={colorMode === 'light' ? 'gray.700' : 'gray.300'}
                fontSize='17px'
                >
                Lift&Log
            </Text>
        </Button>
    )
}

export default Navbar;