import { VStack, Flex, Box, HStack } from "@chakra-ui/react";

import Workout_Title from "./workout_title";
import Exercise_List from "./exercise_list";
import { getSecondToLastElementFromUrl } from "../../useful_functions/functions";
import Add_Exercise_Button from "./exercise_add";

import { TiTick } from "react-icons/ti";
import Back_Button from "../back_button";


const Workout_Body = () => {

    return (
        <VStack w='92%' maxW='600px' pb='50px'>

            <Box w='100%' mt='20px'>
                <Back_Button />
            </Box>

            <HStack w='100%' pl='2px' pr='2px' justifyContent='space-between'  gap='20px' mt='10px'>
                <Workout_Title title={getSecondToLastElementFromUrl()} />
                <Completed />
            </HStack>

            <Box w='100%' mt='30px'>
                <Add_Exercise_Button />
            </Box>


            <Box w='100%' maxW='600px' mt='20px'>
                <Exercise_List />
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
            // onClick={complete_workout}
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


export default Workout_Body;