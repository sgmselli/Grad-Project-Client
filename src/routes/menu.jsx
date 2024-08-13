import { useColorMode, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";

import Navbar from "../components/navbar"
import MenuBody from "../components/menu components/menu_body";
import { user_details } from "../api/endpoints";

const Menu = () => {

    const { colorMode } = useColorMode();

    const [name, setName] = useState('')

    useEffect(() => {

        const userState = localStorage.getItem('user')

        const fetchUser = async () => {
            if (!userState) {
                const user_details_response = await user_details();
                setName(user_details_response.name)
            } else {
                setName(userState.name)
            }
        }
        fetchUser();
        
    })

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            <Navbar />
            <MenuBody name={name} />
        </VStack>
    )
}

export default Menu;