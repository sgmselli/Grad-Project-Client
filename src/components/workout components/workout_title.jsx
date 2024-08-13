import { HStack, useColorMode } from "@chakra-ui/react";
import { useState } from 'react';
import { replaceUnderscoresWithSpaces } from "../../useful_functions/functions";
import { update_workout } from "../../api/endpoints";

import { DynamicTitle } from "../dynamic_title";

const Workout_Title = ({title, workout_id}) => {

    const { colorMode } = useColorMode();

    const [ workoutTitle, setWorkoutTitle ] = useState(title);

    const handleChange = (changed_title) => {
        setWorkoutTitle(changed_title);
    }

    const handleUpdate = () => {
        if (title !== workoutTitle) {
            update_workout( workout_id, {'name': workoutTitle})
        }
    }

    return (
        <HStack gap='16px' justifyContent='start'>
            <HStack justifyContent='center'   color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                <DynamicTitle title={replaceUnderscoresWithSpaces(workoutTitle)} changeTitle={handleChange} updateTitle={handleUpdate}  />
            </HStack>
        </HStack>
    )
}

 
export default Workout_Title;