import { useColorMode, VStack } from "@chakra-ui/react"
import { useState, useEffect } from "react";

import Navbar from "../components/navbar"
import Workout_Body from "../components/workout components/workout_body";

const Workout = () => {

    const { colorMode } = useColorMode();

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            <Navbar />
            <Workout_Body />

        </VStack>
    )
}

export default Workout;