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

                const date = workout.date.split('-')
                const year = date[0]
                const month = date[1]

                const convertMonth = (month) => {
                    const monthDict = {
                        '01': 'January',
                        '02': 'February',
                        '03': 'March',
                        '04': 'April',
                        '05': 'May',
                        '06': 'June',
                        '07': 'July',
                        '08': 'August',
                        '09': 'September',
                        '10': 'October',
                        '11': 'November',
                        '12': 'December'
                    };
                
                    // Check if the input is a valid two-digit string
                    if (typeof month === 'string' && /^\d{2}$/.test(month)) {
                        return monthDict[month] || "Invalid month"; // Return month name or invalid message
                    } else {
                        return "Invalid input"; // For invalid input
                    }
                }

                return (
                    <VStack w='100%' gap='0'>
                        {
                            idx > 0 ? (
                                (month !== workouts[idx-1].date.split('-')[1] || year !== workouts[idx-1].date.split('-')[0]) && (
                                    <Flex mt='30px' w='92%' maxW='600px' alignItems='start' color='gray.300'>
                                        <Text>{convertMonth(month)} {year}</Text>
                                    </Flex>
                                )
                            ) :
                            <Flex mt='30px' w='92%' maxW='600px' alignItems='start' color='gray.300'>
                                <Text>{convertMonth(month)} {year}</Text>
                            </Flex>
                        }
                        <Motion_Item
                            key={idx}     
                            isVisible={isVisible}    
                            idx={idx}    
                            component={ <Workout_Box key={idx} workout_id={workout.id} workout_name={workout.name} workout_complete={workout.completed} workout_date={workout.date} />}   
                        />
                    </VStack>
                )
            })}
        </VStack>
    )
}

export default Workouts_List;