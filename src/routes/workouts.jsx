import { useColorMode, VStack } from "@chakra-ui/react"
import { useState, useEffect } from "react";

import Navbar from "../components/navbar"
import Workouts_Body from "../components/workouts components/workouts_body";

const Workouts = () => {

    const [workoutType, setWorkoutType] = useState('')
    const { colorMode } = useColorMode();

    useEffect(() => {
        /**
         * Returns if the workouts are either completed or not so we can display the correct workouts for the correct page
         * 
         */
        const findWorkoutType = () => {
            const url = window.location.href; 
            const lastPart = url.split('/').pop(); 

            setWorkoutType(lastPart)
        }
        findWorkoutType();

    }, [])

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            <Navbar />
            <Workouts_Body workoutType={workoutType} />
        </VStack>
    )
}

export default Workouts;