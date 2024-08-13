import { VStack, Flex, Box, HStack } from "@chakra-ui/react";

import WorkoutTitle from "./workout_title";
import ExerciseList from "./exercise_list";
import { getNumToLastElementFromUrl } from "../../useful_functions/functions";
import AddExerciseButton from "./exercise_add";

import { TiTick } from "react-icons/ti";
import BackButton from "../back_button";


const WorkoutBody = () => {

    const workout_title = getNumToLastElementFromUrl(2);
    const workout_id = getNumToLastElementFromUrl(1);

    return (
        <VStack w='92%' maxW='600px' pb='50px'>

            <Box w='100%' mt='20px'>
                <BackButton />
            </Box>

            <HStack w='100%' pl='2px' pr='2px' justifyContent='space-between'  gap='20px' mt='10px'>
                <Box w='100%' flex='4'>
                    <WorkoutTitle title={workout_title} workout_id={workout_id} />
                </Box>
                <Flex w='100%' flex='2' justifyContent='end'>
                    <Completed />
                </Flex>
            </HStack>

            <Box w='100%' mt='30px'>
                <AddExerciseButton />
            </Box>


            <Box w='100%' maxW='600px' mt='20px'>
                <ExerciseList />
            </Box>
     
        </VStack>
    )
}

const Completed = () => {

    const clicked = 0

    return (
        <Flex 
            w='24px' 
            h='24px' 
            border='2px solid' 
            borderColor={clicked ? 'blue.400' : 'gray.400'}
            transform={clicked ? 'scale(0.95)' : 'scale(1)'} // Bouncing effect
            transition="border-color 0.3s ease-in-out"
            borderRadius='4px'
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
            >
                {
                    clicked ?
                        <Box color='blue.400'>
                     
                            <TiTick size='18px' />
                            
                            
                        </Box>
                        :
                        <></>
                }
        </Flex>
    )
}


export default WorkoutBody;