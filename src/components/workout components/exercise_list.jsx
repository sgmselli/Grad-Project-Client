import { VStack, Flex, HStack, Box, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { get_completed_workouts, get_exercises, get_planned_workouts } from "../../api/endpoints";
import Exercise_Box from "./exercise_item";

import Motion_Item from "../motion";


const Exercise_List = () => {

    const [exercises, setExercises] = useState([])
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(true);
        }, 100); // Adjust the delay as needed
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {

        const pathArray = window.location.pathname.split('/');
        const workout_id = pathArray[pathArray.length - 1] 
        
        const fetchExecises = async () => {
            const exercises = await get_exercises(workout_id);
            setExercises(exercises);            
        }
        fetchExecises();
    }, [])

    return (
        <VStack justifyContent='center' alignItems='center' w='100%' pb='50px' gap='15px'>
            
            {exercises.map((exercise, idx) => {
                return (
                    <Motion_Item
                    key={idx}     
                    isVisible={isVisible}    
                    idx={idx}    
                    component={
                        <Exercise_Box
                            exercise_id={exercise.id}
                            set_count={exercise.set_count}
                            exercise_name={exercise.name}
                        >
                        </Exercise_Box>
                    }   
                />
                )
            })}
        </VStack>
    )
}

export default Exercise_List;