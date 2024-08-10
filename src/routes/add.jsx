import { useColorMode, VStack } from "@chakra-ui/react"

import Navbar from "../components/navbar"
import Add_Body from "../components/add components/add_body";


const Add = () => {

    const { colorMode } = useColorMode();

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            <Navbar />
            <Add_Body />
        </VStack>
    )
}

export default Add;