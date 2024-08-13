import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { get_exercises } from "../../api/endpoints";
import ExerciseBox from "./exercise_item";

import MotionItem from "../motion";


const ExerciseList = ({handleClick, clicked}) => {

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
    }, [clicked])

    return (
        <VStack justifyContent='center' alignItems='center' w='100%' pb='50px' gap='15px'>
            
            {exercises.map((exercise, idx) => {
                return (
                    <MotionItem
                    key={idx}     
                    isVisible={isVisible}    
                    idx={idx}    
                    component={
                        <ExerciseBox
                            handleClick={handleClick}
                            exercise_id={exercise.id}
                            set_count={exercise.set_count}
                            exercise_name={exercise.name}
                        >
                        </ExerciseBox>
                    }   
                />
                )
            })}
        </VStack>
    )
}

export default ExerciseList;