import { VStack, Flex, HStack, Box, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { get_completed_workouts, get_planned_workouts } from "../../api/endpoints";

import Motion_Item from "../motion";
import Workout_Box from "./workout_item";


const Workouts_List = ({workoutType}) => {

    const [workouts, setWorkouts] = useState([])
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(true);
        }, 100); // Adjust the delay as needed
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {
        
        const fetchWorkouts = async () => {
            if (workoutType === 'completed') {
                const completed_workouts = await get_completed_workouts();
                setWorkouts(completed_workouts);
            } else if (workoutType === 'planned') {
                const planned_workouts = await get_planned_workouts();
                console.log(planned_workouts)
                setWorkouts(planned_workouts);
            }
            
        }
        fetchWorkouts();
    }, [workoutType])

    return (
        <VStack justifyContent='center' alignItems='center' w='100%' pb='50px' gap='0'>
            
            {workouts.map((workout, idx) => {
                return (
                    <Motion_Item
                    key={idx}     
                    isVisible={isVisible}    
                    idx={idx}    
                    component={ <Workout_Box key={idx} workout_id={workout.id} workout_name={workout.name} workout_complete={workout.completed} workout_date={workout.date} />}   
                />
                )
            })}
        </VStack>
    )
}

export default Workouts_List;