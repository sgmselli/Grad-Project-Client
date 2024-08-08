import { useColorMode, VStack } from "@chakra-ui/react"

import Navbar from "../components/navbar"
import Menu_Body from "../components/menu components/menu_body";

const Menu = () => {

    const { colorMode } = useColorMode();

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            <Navbar />
            <Menu_Body />
        </VStack>
    )
}

export default Menu;