import { HStack, Text, Box, useColorMode, Flex } from "@chakra-ui/react";
import { replaceUnderscoresWithSpaces } from "../../useful_functions/functions";
import { useState } from "react";

import { Dynamic_Title } from "../dynamic_title";
import { update_exercise } from "../../api/endpoints";

const Exercise_Title = ({workout_id, exercise_id, workout_title, exercise_title}) => {

    const { colorMode } = useColorMode();

    const [ exerciseTitle, setExerciseTitle ] = useState(exercise_title);

    const handleChange = (changed_title) => {
        setExerciseTitle(changed_title);
    }

    const handleUpdate = () => {
        if (exercise_title !== exerciseTitle) {
            update_exercise( workout_id, exercise_id, {'name': exerciseTitle})
        }
    }

    return (
            <HStack alignItems='end'  justifyContent='space-between' className="rubik-bold"  color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                <Box w='100%' flex='6'>
                    <Dynamic_Title title={replaceUnderscoresWithSpaces(exerciseTitle)} changeTitle={handleChange} updateTitle={handleUpdate}  />
                </Box>
                <Flex w='100%' flex='3' justifyContent='end'>
                    <Text pb='6px' whiteSpace='nowrap' fontSize={{base: '18px', md:'22px'}} color='blue.400'>({replaceUnderscoresWithSpaces(workout_title)})</Text>
                </Flex>
            </HStack>
    )
}


 
export default Exercise_Title;