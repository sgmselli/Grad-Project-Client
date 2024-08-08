import { VStack, useColorMode } from "@chakra-ui/react"


import Landing_Body from "../components/landing components/landing_body"
import Navbar from "../components/navbar"
import LoadingBar from "../components/loading_bar"

const Landing = () => {

    const { colorMode } = useColorMode()

    return (
            <VStack 
                w='100vw'
                minH='100vh' 
                h='100%'
                bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
            >
                {/* <LoadingBar /> */}
                <Navbar />
                <Landing_Body />
            </VStack>
    )
}

export default Landing;