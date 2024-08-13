import { useColorMode, VStack } from "@chakra-ui/react"
import SignInBody from "../components/sign in components/sign_in_body"
import Navbar from "../components/navbar"

const SignIn = () => {

    const { colorMode } = useColorMode();

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            <Navbar />
            <SignInBody />
        </VStack>
    )
}

export default SignIn;