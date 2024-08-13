import { VStack, useColorMode } from "@chakra-ui/react"


import LandingBody from "../components/landing components/landing_body"
import Navbar from "../components/navbar"

const Landing = () => {

    const { colorMode } = useColorMode()

    return (
            <VStack 
                w='100vw'
                minH='100vh' 
                h='100%'
                bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
            >
                <Navbar />
                <LandingBody />
            </VStack>
    )
}

export default Landing;