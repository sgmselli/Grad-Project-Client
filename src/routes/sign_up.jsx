import { VStack , useColorMode} from "@chakra-ui/react"

import SignUpBody from "../components/sign up components/sign_up_body"
import Navbar from "../components/navbar"

const Sign_Up = () => {

    const { colorMode } = useColorMode()

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            h='100%'
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            
            <Navbar />
            <SignUpBody />

        </VStack>
    )
}

export default Sign_Up;