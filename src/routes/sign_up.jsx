import { VStack , useColorMode} from "@chakra-ui/react"

import Sign_Up_Body from "../components/sign up components/sign_up_body"
import Navbar from "../components/navbar"
import LoadingBar from "../components/loading_bar"

const Sign_Up = () => {

    const { colorMode } = useColorMode()

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            {/* <LoadingBar /> */}
            <Navbar />
            <Sign_Up_Body />
        </VStack>
    )
}

export default Sign_Up;