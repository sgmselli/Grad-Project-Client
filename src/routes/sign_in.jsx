import { useColorMode, VStack } from "@chakra-ui/react"

import { useEffect, useState } from "react";

import Sign_In_Body from "../components/sign in components/sign_in_body"
import Navbar from "../components/navbar"
import LoadingBar from "../components/loading_bar";

const Sign_In = () => {

    const { colorMode } = useColorMode();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        // Simulate page navigation/loading
        setTimeout(() => {
        setIsLoading(false);
        }, 2000); // 2 seconds loading
    });

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            {/* <LoadingBar /> */}
            <Navbar />
            <Sign_In_Body />
        </VStack>
    )
}

export default Sign_In;