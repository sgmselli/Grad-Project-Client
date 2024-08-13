import { useColorMode, VStack } from "@chakra-ui/react"

import Navbar from "../components/navbar"
import AddBody from "../components/add components/add_body";


const Add = () => {

    const { colorMode } = useColorMode();

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            <Navbar />
            <AddBody />
        </VStack>
    )
}

export default Add;