import { VStack, Text, Flex, Button, useColorMode } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../contexts/auth_context";

const Landing_Sign_Up = () => {

    const nav = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleNavigate = (route) => {

        console.log(isAuthenticated)

        if (!isAuthenticated) {
            nav(`/${route}`);
        } else {
            nav('/menu')
        }

    }

    return (
        <VStack gap='10px'>
            <Track_Button handleNavigate={handleNavigate}/>
            <Sign_In handleNavigate={handleNavigate} />
        </VStack>
    )
}

const Track_Button = ({handleNavigate}) => {
    return (
        <Button
            onClick={(route) => handleNavigate('sign_up')}
            _hover={{bg:'blue.300'}}
            bg='blue.400'
            w='256px'
            h='48px'
        >
            <Text
                color='white'
                className="rubik"
                fontSize='13px'
                sx={{ wordSpacing: '3px' }}
            >
                
                TRACK MY LIFTS
                
            </Text>
        </Button>
    )
}

const Sign_In = ({handleNavigate}) => {

    const { colorMode } = useColorMode();

    return (
        <Button
        onClick={(route) => handleNavigate('sign_in')}
        _hover={ colorMode === 'light' ? {bg:'rgba(150, 150, 150, 0.4)'} : {bg:'rgba(150, 150, 150, 0.3)'}}
        bg='none'
        w='256px'
        h='48px'
        className="rubik"
        fontSize='13px'
        color={colorMode === 'light' ? 'gray.700' : 'gray.300'}
        sx={{ wordSpacing: '3px' }}
    >
        <Text
      
        >
            
            I HAVE AN ACCOUNT
            
        </Text>
    </Button>
    )
}

export default Landing_Sign_Up;